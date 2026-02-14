import fs from 'fs/promises';
import path from 'path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import blogPosts from '../blogs';
import './BlogPost.css';

type BlogPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function escapeHtml(text: string): string {
  return text
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function formatInline(markdown: string): string {
  const escaped = escapeHtml(markdown);
  const withLinks = escaped.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
  const withBold = withLinks.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  return withBold.replace(/`([^`]+)`/g, '<code>$1</code>');
}

function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const html: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let inUnorderedList = false;
  let inOrderedList = false;

  const closeLists = () => {
    if (inUnorderedList) {
      html.push('</ul>');
      inUnorderedList = false;
    }
    if (inOrderedList) {
      html.push('</ol>');
      inOrderedList = false;
    }
  };

  for (const line of lines) {
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        closeLists();
        inCodeBlock = true;
        codeLines = [];
      } else {
        html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
        inCodeBlock = false;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    const trimmed = line.trim();
    if (trimmed.length === 0) {
      closeLists();
      continue;
    }

    if (trimmed.startsWith('# ')) {
      closeLists();
      html.push(`<h1>${formatInline(trimmed.slice(2))}</h1>`);
      continue;
    }
    if (trimmed.startsWith('## ')) {
      closeLists();
      html.push(`<h2>${formatInline(trimmed.slice(3))}</h2>`);
      continue;
    }
    if (trimmed.startsWith('### ')) {
      closeLists();
      html.push(`<h3>${formatInline(trimmed.slice(4))}</h3>`);
      continue;
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      if (inUnorderedList) {
        html.push('</ul>');
        inUnorderedList = false;
      }
      if (!inOrderedList) {
        html.push('<ol>');
        inOrderedList = true;
      }
      html.push(`<li>${formatInline(trimmed.replace(/^\d+\.\s+/, ''))}</li>`);
      continue;
    }

    if (trimmed.startsWith('- ')) {
      if (inOrderedList) {
        html.push('</ol>');
        inOrderedList = false;
      }
      if (!inUnorderedList) {
        html.push('<ul>');
        inUnorderedList = true;
      }
      html.push(`<li>${formatInline(trimmed.slice(2))}</li>`);
      continue;
    }

    closeLists();
    html.push(`<p>${formatInline(trimmed)}</p>`);
  }

  closeLists();
  if (inCodeBlock) {
    html.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  }

  return html.join('\n');
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((entry) => entry.slug === slug);
  if (!post) {
    notFound();
  }

  const markdownPath = path.join(process.cwd(), 'public', post.markdownFile.replace(/^\//, ''));
  let markdownContent = '';

  try {
    markdownContent = await fs.readFile(markdownPath, 'utf8');
  } catch {
    notFound();
  }

  const htmlContent = markdownToHtml(markdownContent);

  return (
    <div className="blog-post-shell">
      <article className="blog-post-card">
        <Link href="/blogs" className="blog-post-back">
          {'< back to blogs'}
        </Link>
        <h1 className="blog-post-title">{post.title}</h1>
        <p className="blog-post-meta">
          {post.category} | {post.level} | {post.readTime}
        </p>
        <div className="blog-content" dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </article>
    </div>
  );
}
