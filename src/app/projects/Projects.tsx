type Project = {
  id: number;
  title: string;
  subtitle: string;
  summary: string;
  focus: string;
  stack: string[];
  image: string;
  tech: string;
  slug?: string;
  githubUrl?: string;
};

const javaProjects: Project[] = [
  {
    id: 1,
    title: 'CFA Applications',
    subtitle: 'Customer-Facing Enterprise Applications',
    summary:
      'Enterprise Java and Spring Boot applications supporting customer journeys, service integrations, and production-grade backend workflows.',
    focus: 'Java backend ownership',
    stack: ['Java', 'Spring Boot', 'REST APIs'],
    image: '/images/dana.png',
    tech: 'Java Spring Boot',
  },
  {
    id: 2,
    title: 'MOVIE',
    subtitle: 'Movement and Inventory Engine',
    summary:
      'Distributed backend platform for inventory and movement processing in a large retail environment with event-driven system integration.',
    focus: 'Enterprise platform engineering',
    stack: ['Spring Boot', 'Kafka', 'Distributed Systems'],
    image: '/images/movie.png',
    tech: 'Kafka',
    slug: 'movie',
  },
];

const backendProjects: Project[] = [
  {
    id: 3,
    title: 'DANA',
    subtitle: 'Analytics and Navigation Services',
    summary:
      'Backend services supporting operational analytics and decision-making flows for enterprise retail use cases.',
    focus: 'Service design and integration',
    stack: ['Scala', 'APIs', 'Backend Services'],
    image: '/images/dana.png',
    tech: 'Scala',
    slug: 'dana',
  },
  {
    id: 4,
    title: 'TSMS',
    subtitle: 'TV Series Management System',
    summary:
      'Application design and backend modeling project focused on clean service structure, data handling, and maintainable APIs.',
    focus: 'Application architecture',
    stack: ['Scala', 'Backend Design', 'Data Modeling'],
    image: '/images/dana.png',
    tech: 'Scala',
    slug: 'tsms',
  },
  {
    id: 5,
    title: 'SDP',
    subtitle: 'Sensor Data Processing',
    summary:
      'Backend processing flow for high-volume device data with emphasis on throughput, reliability, and downstream consumption.',
    focus: 'Event processing',
    stack: ['Scala', 'Streaming', 'Data Processing'],
    image: '/images/dana.png',
    tech: 'Scala',
  },
];

const engineeringProjects: Project[] = [
  {
    id: 6,
    title: 'P&CP',
    subtitle: 'Producer Consumer Problem',
    summary:
      'Concurrency-focused implementation demonstrating message flow coordination, backpressure awareness, and systems thinking.',
    focus: 'Concurrency fundamentals',
    stack: ['Kafka', 'Concurrency', 'Messaging'],
    image: '/images/dana.png',
    tech: 'Kafka',
    githubUrl: 'https://github.com/ramanmishra',
  },
  {
    id: 7,
    title: 'CCS',
    subtitle: 'Code Chef Solutions',
    summary:
      'Problem-solving exercises that sharpen algorithmic thinking, debugging discipline, and implementation speed.',
    focus: 'Problem solving',
    stack: ['Algorithms', 'DSA', 'Problem Solving'],
    image: '/images/dana.png',
    tech: 'Problem Solving',
    githubUrl: 'https://github.com/ramanmishra',
  },
];

const projects = [...javaProjects, ...backendProjects, ...engineeringProjects];

export { javaProjects, backendProjects, engineeringProjects };
export type { Project };
export default projects;
