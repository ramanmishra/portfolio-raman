'use client'

import ProjectDetails from '../ProjectDetails';
import { movie } from "../descriptions";

function Project() {
    return (
        <>
            <ProjectDetails architecture={movie.architecture} description={movie.description} businessUseCase={movie.business_use_case} />
        </>
    )
}

export default Project;