'use client'

import React, { useState } from "react";
import "./AboutMe.css";
import { usePathname } from 'next/navigation';
import BioSection from "@/components/BioSection";
import InterestSection from "@/components/InterestSection";
import UniversityEducationSection from "@/components/UniversityEducationSection";
import HighSchoolEducationSection from "@/components/HighSchoolEducationSection";

const validTabs = ["about", "interest", "education", "high-school", "university"] as const;
type TabKey = typeof validTabs[number];

const activeTabContent = {
    about: <BioSection />,
    interest: <InterestSection />,
    education: <></>,
    "high-school": <HighSchoolEducationSection />,
    university: <UniversityEducationSection />
};

const AboutMe: React.FC = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [educationExpanded, setEducationExpanded] = useState(false);
    const [selectedEducation, setSelectedEducation] = useState<'highschool' | 'university' | null>(null);

    function isTabKey(value: string): value is TabKey {
        return validTabs.includes(value as TabKey);
    }

    function getTabContent(tab: TabKey) {
        return activeTabContent[tab];
    }

    let content = null;
    if (isTabKey(activeTab)) {
        content = getTabContent(activeTab);
    }

    function getTabClass(tab: string, activeTab: string): string {
        return tab === activeTab ? "title" : "explorer";
    }

    const pathname = usePathname();
    return (
        <div className="about-container">
            <div className="sidebar">
                <ul className="explorer">
                    <li className={getTabClass('about', activeTab)} onClick={() => setActiveTab('about')}>› personal-info</li>
                    <li className={getTabClass('interest', activeTab)} onClick={() => setActiveTab('interest')}>interest</li>
                    <li className={getTabClass('education', activeTab)} onClick={() => {
                        setSelectedEducation(null);
                    }}>
                        <span onClick={() => setEducationExpanded(!educationExpanded)}>
                            {educationExpanded ? '▼' : '▶'} education
                        </span>
                        {educationExpanded && (
                            <ul>
                                <li className={getTabClass('high-school', activeTab)} onClick={() => setActiveTab('high-school')}>high-school</li>
                                <li className={getTabClass('university', activeTab)} onClick={() => setActiveTab('university')}>university</li>
                            </ul>
                        )}
                    </li>
                </ul>
            </div>
            <div style={{ width: "80%" }}>
                <div className="title">{activeTab}.raman</div>
                <div className="main-content">
                    <div>
                        <pre style={{ whiteSpace: "initial" }}>
                            {content}
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;


{/* <div className="snippet-section">
                        <h3>// Code snippet showcase:</h3>
                        <div className="snippet-card">
                            <div className="snippet-meta">
                                <span>@username</span>
                                <span>• 5 months ago</span>
                                <span>★ 3 stars</span>
                            </div>
                            <pre>
                                {`function initializeModelChunk<T>(chunk: ResolvedModelChunk): T {
  const value: T = parseModel(chunk._response, chunk._value);
  const initializedChunk: InitializedChunk<T> = (chunk: any);
  initializedChunk._status = INITIALIZED;
  initializedChunk._value = value;
  return value;
}`}
                            </pre>
                        </div>

                        <div className="snippet-card">
                            <div className="snippet-meta">
                                <span>@username</span>
                                <span>• 9 months ago</span>
                                <span>★ 0 stars</span>
                            </div>
                            <pre>
                                {`export function parseModelTuple(
  response: Response,
  value: {[key: string]: JSONValue} | $ReadOnlyArray<JSONValue>,
): any {
  const tuple: [mixed, mixed, mixed, mixed] = (value: any);
}`}
                            </pre>
                        </div>
                    </div> */}