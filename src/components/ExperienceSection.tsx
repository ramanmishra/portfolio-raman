export default function ExperienceSection() {
  const roleStyle: React.CSSProperties = {
    fontSize: '1.05rem',
    fontWeight: 600,
    color: '#facc15',
    marginBottom: '0.35rem',
    fontFamily: 'Fira Code, monospace',
  };

  const companyStyle: React.CSSProperties = {
    color: '#d0d6f9',
    fontWeight: 600,
  };

  const metaStyle: React.CSSProperties = {
    color: '#94a3b8',
    fontSize: '0.9rem',
    marginBottom: '0.6rem',
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: '1.1rem',
    marginBottom: '2rem',
  };

  const itemStyle: React.CSSProperties = {
    marginBottom: '0.45rem',
  };

  return (
    <section>
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={roleStyle}>Senior Software Engineer</h3>
        <div style={metaStyle}>
          <span style={companyStyle}>Zalando SE</span> | 2024–Present
        </div>
        <ul style={listStyle}>
          <li style={itemStyle}>
            Building backend services for enterprise retail workflows with a
            focus on scalability, maintainability, and production reliability.
          </li>
          <li style={itemStyle}>
            Contributing to architecture discussions, code reviews, and team
            engineering quality.
          </li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3 style={roleStyle}>Software Engineer</h3>
        <div style={metaStyle}>
          <span style={companyStyle}>TTMzero</span> | 2022–2024
        </div>
        <ul style={listStyle}>
          <li style={itemStyle}>
            Developed backend microservices and APIs for production systems with
            emphasis on clean service design and maintainable delivery.
          </li>
          <li style={itemStyle}>
            Worked closely with distributed teams and supported knowledge sharing
            through internal learning sessions.
          </li>
        </ul>
      </div>

      <div>
        <h3 style={roleStyle}>Specialist Programmer</h3>
        <div style={metaStyle}>
          <span style={companyStyle}>Infosys Ltd.</span> | 2017–2022
        </div>
        <ul style={listStyle}>
          <li style={itemStyle}>
            Delivered enterprise Java and Spring Boot backend applications for
            large retail clients across customer and operational workflows.
          </li>
          <li style={itemStyle}>
            Worked on microservices, integrations, and backend features in
            large-scale delivery environments.
          </li>
        </ul>
      </div>
    </section>
  );
}
