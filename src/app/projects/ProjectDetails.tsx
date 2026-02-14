import React, { useState } from 'react';
import './ProjectDetails.css'
import Image from 'next/image';

interface ProjectDetailsProps {
    architecture: string;
    description: string;
    businessUseCase: string;
    onBack?: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
    architecture,
    description,
    businessUseCase,
    onBack
}) => {
    const [activeDiagram, setActiveDiagram] = useState<'main' | 'server' | 'deployment' | 'ui' | 'database'>('main');
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

    const handleClick = (section: 'server' | 'deployment' | 'ui' | 'database') => {
        setActiveDiagram(section);
    };

    const renderDiagram = () => {
        if (activeDiagram === 'main') {
            return (
                <div className="diagram-container">
                    <Image src='/Movie_HighLevel_Architecture.png' alt='' width={1000} height={1000} className="project-image" />
                    {/* <div className="diagram-box" onClick={() => handleClick('ui')}>
                        UI (optional)
                    </div>
                    <div className="diagram-box" onClick={() => handleClick('server')}>
                        Server
                    </div>
                    <div className="diagram-box" onClick={() => handleClick('database')}>
                        Data Persistant
                    </div> */}
                </div>
            );
        } else {
            return (
                <div className="diagram-detail">
                    <button className="back-button" onClick={() => setActiveDiagram('main')}>
                        ← Back to High-Level Architecture
                    </button>
                    <p>Low-level diagram and explanation for <strong>{activeDiagram}</strong> goes here.</p>
                </div>
            );
        }
    };

    return (
        <div className='project-detail-container'>
            {onBack && (
                <button className="back-button" onClick={onBack}>
                    ← Back
                </button>
            )}

            <h2 className="section-title">Architecture</h2>
            {renderDiagram()}

            <h2 className="section-title">Description</h2>
            <p className="section-content">{description}</p>

            <h2 className="section-title">Business Use Case</h2>
            <p className="section-content">{businessUseCase}</p>
        </div>
    );
};

export default ProjectDetails;
