export default function UniversityEducationSection() {
    const headingStyle: React.CSSProperties = {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#facc15',
        marginBottom: '0.5rem',
        paddingBottom: '0.25rem',
        fontFamily: 'Fira Code, monospace',
    };

    return (
        <section>
            <ul>
                <h3 style={headingStyle}>Bachelor of Computer Science – Jabalpur Engineering College (2012–2016)</h3>
                <p style={{ marginBottom: '1rem' }}>
                    Graduated with a CGPA of 7.1. Actively involved in academic and extracurricular activities,
                    including intercollege chess tournaments and a wrote research paper on parallel mobile computing.
                </p>
                <h3 style={headingStyle}>Certifications & Self-Learning</h3>
                <ul>
                    <li>HarvardX PH125.2x: Data Science: Visualization</li>
                    <li>HarvardX PH125.4x: Data Science: Inference and</li>
                    <li>HarvardX PH125.7x: Data Science: Linear Regression</li>
                    <li>HarvardX PH125.8x: Data Science: Machine Learning</li>
                </ul>
                <br />
                <p>
                    I regularly invest time in mastering core concepts in distributed systems, observability,
                    and backend performance through self-paced learning and open-source contributions.
                </p>
            </ul>
        </section>
    );
}