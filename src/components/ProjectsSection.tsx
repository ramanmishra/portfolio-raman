interface Project {
    name: string;
    architecture: string;
    description: string;
    businessUseCase: string;
}

const projects: Project[] = [
    {
        name: 'MovIE Engine',
        architecture: 'Microservices with Kafka, Spring Boot, Cassandra.',
        description: 'Engine handling movement and inventory data pipelines.',
        businessUseCase: 'Streamlined movement data processing in global retail systems.'
    },
    {
        name: 'Customer App',
        architecture: 'React frontend + Akka backend with MongoDB.',
        description: 'Self-service portal for customer orders and inquiries.',
        businessUseCase: 'Improved user experience and reduced support load.'
    }
];

export default function ProjectsSection() {
    return (
        <section>
            {projects.map((project) => (
                <div key={project.name}>
                    <h3>{project.name}</h3>
                    <p><strong>Architecture:</strong> {project.architecture}</p>
                    <p><strong>Description:</strong> {project.description}</p>
                    <p><strong>Business Use Case:</strong> {project.businessUseCase}</p>
                </div>
            ))}
        </section>
    );
}
