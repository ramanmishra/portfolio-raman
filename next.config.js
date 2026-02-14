const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repository = process.env.GITHUB_REPOSITORY || '';
const repoName = repository.split('/')[1] || '';
const isUserOrOrgPage = repoName.endsWith('.github.io');
const basePath = isGithubActions && !isUserOrOrgPage ? `/${repoName}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath,
};

module.exports = nextConfig;
