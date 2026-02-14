'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

type ProjectButtonProps = {
  projectSlug?: string;
  routePath?: string;
  githubUrl?: string;
  label?: string;
  className?: string;
};

const ProjectButton: React.FC<ProjectButtonProps> = ({
  projectSlug,
  routePath,
  githubUrl,
  label = 'view-project',
  className,
}) => {
  const router = useRouter();
  const isDisabled = !projectSlug && !routePath && !githubUrl;

  const handleClick = () => {
    if (routePath) {
      router.push(routePath);
      return;
    }

    if (projectSlug) {
      router.push(`/projects/${projectSlug}`);
      return;
    }

    if (githubUrl) {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleClick}
      disabled={isDisabled}
      aria-disabled={isDisabled}
    >
      {label}
    </button>
  );
};

export default ProjectButton;
