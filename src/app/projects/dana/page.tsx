'use client'

import ProjectDetails from '../ProjectDetails';
import { dana } from "../descriptions";

function Project() {
    return (
        <>
            <ProjectDetails architecture={dana.architecture} description={dana.description} businessUseCase={dana.business_use_case} />
        </>
    )
}

export default Project;