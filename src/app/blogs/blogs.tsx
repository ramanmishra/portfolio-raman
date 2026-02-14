export type BlogPost = {
  id: number;
  slug: string;
  title: string;
  category: 'Scala' | 'Spring Boot' | 'Kafka' | 'System Design' | 'General';
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  readTime: string;
  summary: string;
  markdownFile: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'backpressure-in-kafka-without-the-hand-waving',
    title: 'Backpressure in Kafka Without the Hand-Waving',
    category: 'Kafka',
    level: 'Intermediate',
    readTime: '8 min read',
    summary:
      'A practical guide to consumer lag, polling strategy, and load-shedding patterns for stable event pipelines.',
    markdownFile: '/blogs/backpressure-in-kafka-without-the-hand-waving.md',
  },
  {
    id: 2,
    slug: 'idempotency-keys-in-spring-boot-apis',
    title: 'Idempotency Keys in Spring Boot APIs',
    category: 'Spring Boot',
    level: 'Beginner',
    readTime: '7 min read',
    summary:
      'How to design write endpoints that safely handle retries, duplicate requests, and partial failures.',
    markdownFile: '/blogs/idempotency-keys-in-spring-boot-apis.md',
  },
  {
    id: 3,
    slug: 'functional-error-handling-in-scala-with-either',
    title: 'Functional Error Handling in Scala with Either',
    category: 'Scala',
    level: 'Beginner',
    readTime: '6 min read',
    summary:
      'A compact pattern for explicit error propagation, readable composition, and predictable service behavior.',
    markdownFile: '/blogs/functional-error-handling-in-scala-with-either.md',
  },
  {
    id: 4,
    slug: 'designing-a-rate-limiter-token-bucket-explained',
    title: 'Designing a Rate Limiter: Token Bucket Explained',
    category: 'System Design',
    level: 'Intermediate',
    readTime: '9 min read',
    summary:
      'Core algorithms, storage choices, and edge-case handling for production-ready API rate limiting.',
    markdownFile: '/blogs/designing-a-rate-limiter-token-bucket-explained.md',
  },
  {
    id: 5,
    slug: 'when-to-use-caching-and-when-not-to',
    title: 'When to Use Caching and When Not To',
    category: 'General',
    level: 'Beginner',
    readTime: '5 min read',
    summary:
      'Tradeoffs across latency, consistency, invalidation cost, and observability for backend-heavy systems.',
    markdownFile: '/blogs/when-to-use-caching-and-when-not-to.md',
  },
  {
    id: 6,
    slug: 'exactly-once-semantics-what-you-actually-get',
    title: 'Exactly-Once Semantics: What You Actually Get',
    category: 'Kafka',
    level: 'Advanced',
    readTime: '10 min read',
    summary:
      'A realistic look at producer idempotence, transactions, and downstream guarantees across service boundaries.',
    markdownFile: '/blogs/exactly-once-semantics-what-you-actually-get.md',
  },
];

export default blogPosts;
