import Link from 'next/link';
import './DetailsComingSoon.css';

export default function DetailsComingSoonPage() {
  return (
    <div className="details-shell">
      <div className="details-card">
        <p className="details-path">{'> projects / details'}</p>
        <h1 className="details-title">Details Coming Soon</h1>
        <p className="details-copy">I am preparing detailed write-ups for these projects.</p>
        <p className="details-subcopy">
          This page will include architecture, business use case, and implementation deep dive.
        </p>
        <Link href="/projects" className="details-back">
          {'< back to projects'}
        </Link>
      </div>
    </div>
  );
}
