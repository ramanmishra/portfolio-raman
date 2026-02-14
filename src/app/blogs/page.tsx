'use client';

import { useMemo, useState } from 'react';
import ProjectButton from '@/components/ui/ProjectButton';
import blogPosts from './blogs';
import './Blogs.css';

const categories = ['All', 'Scala', 'Spring Boot', 'Kafka', 'System Design', 'General'] as const;
type Category = (typeof categories)[number];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');

  const filteredBlogs = useMemo(
    () =>
      selectedCategory === 'All'
        ? blogPosts
        : blogPosts.filter((post) => post.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <div className="blogs-container">
      <aside className="blogs-sidebar">
        <h3 className="blogs-sidebar-title">{'> blogs'}</h3>
        <div className="blogs-filters">
          {categories.map((category) => (
            <label key={category} className="blogs-filter-item">
              <input
                type="checkbox"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </aside>

      <main className="blogs-main">
        <div className="blogs-tab-title">{selectedCategory}</div>
        <div className="blogs-grid">
          {filteredBlogs.map((post) => (
            <article key={post.id} className="blog-card">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-meta">
                {post.category} | {post.level} | {post.readTime}
              </p>
              <p className="blog-summary">{post.summary}</p>
              <ProjectButton
                className="blog-read-btn"
                routePath={`/blogs/${post.slug}`}
                label="read-blog"
              />
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
