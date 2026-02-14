const scalaProjects = [{
    id: 1,
    title: 'MOVIE',
    subtitle: 'Movement and Inventory Engine',
    description: 'This project involves developing a movement and inventory engine for a multinational retail customer, utilizing Scala 2/3 to create a robust and efficient solution for managing inventory and optimizing supply chain operations.',
    image: "/movie.png",
    tech: 'Scala 2/3',
    slug: 'movie',
},
{
    id: 2,
    title: 'DANA',
    subtitle: 'Data Analytics',
    description: 'This project involves developing a data analytics and navigation application for a multinational retail customer, utilizing Scala 2/3 to create a robust and efficient solution for analyzing customer behavior and optimizing navigation.',
    image: "/dana.png",
    tech: 'Scala 2/3',
    slug: 'dana',
},
{
    id: 3,
    title: 'TSMS',
    subtitle: 'Tv Series Management System',
    description: 'This project involves developing a TV series management system for a multinational retail customer, utilizing Scala 2/3 to create a robust and efficient solution for managing and organizing TV series data.',
    image: "/dana.png",
    tech: 'Scala 2/3',
    slug: 'tsms',
},
{
    id: 5,
    title: 'SDP',
    subtitle: 'Sensor Data Processing',
    description: 'This project involves processing and analyzing sensor data from IoT devices to extract meaningful insights and patterns.',
    image: "/dana.png",
    tech: 'Scala 2/3',
    githubUrl: 'https://github.com/ramanmishra',
}]
const javaProjects = [{
    id: 8,
    title: 'CFA Applications',
    subtitle: 'Customer Facing Applications',
    description: 'This project involves implementing customer-facing applications for a multinational retail customer. To automate the cusotmer interactions, with the help of AI and Java Spring Boot, we have developed a robust and efficient solution for managing customer interactions and providing a seamless user experience.',
    image: "/dana.png",
    tech: 'Java',
    githubUrl: 'https://github.com/ramanmishra',
}]
const kafkaProjects = [{
    id: 6,
    title: 'P&CP',
    subtitle: 'Producer Consumer Problem',
    description: 'This project involves implementing a solution to the classic producer-consumer problem, which is a common synchronization problem in concurrent programming.',
    image: "/dana.png",
    tech: 'Kafka',
    githubUrl: 'https://github.com/ramanmishra',
}]
const problemSolvingProjects = [
    {
        id: 7,
        title: 'CCS',
        subtitle: 'Code Chef Solutions',
        description: 'This project involves implementing solutions to various problems from Code Chef, a competitive programming platform.',
        image: "/dana.png",
        tech: 'Problem Solving',
        githubUrl: 'https://github.com/ramanmishra',
    }
]

const projects = [...scalaProjects, ...javaProjects, ...kafkaProjects, ...problemSolvingProjects];
export { scalaProjects, javaProjects, kafkaProjects, problemSolvingProjects };
export default projects;
