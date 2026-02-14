export default function HighSchoolEducationSection() {
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
                <li>
                    <h3 style={headingStyle}>Excellence School Sagar [M.P.] (2009-2012)</h3>
                    <strong>Higher Secondary</strong> - M.P. Board (2011–2012) - 89%
                </li>
                <li>
                    <strong>Secondary School</strong> - M.P. Board (2009–2010) - 88%
                </li>
                <br />
                <p>Former cricket team captain and NCC Sergeant.</p>
                <p>School cricket captain</p>
            </ul>
        </section>
    );
}