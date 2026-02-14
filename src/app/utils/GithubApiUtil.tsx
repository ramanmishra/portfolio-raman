// githubApi.ts

export async function fetchRepositories(token: string) {
    const response = await fetch('https://api.github.com/user/repos?visibility=public', {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch repositories: ${response.status}`);
    }

    return await response.json();
}

export async function fetchLanguagesForRepo(token: string, repoFullName: string) {
    const response = await fetch(`https://api.github.com/repos/${repoFullName}/languages`, {
        headers: {
            Authorization: `token ${token}`,
            Accept: 'application/vnd.github+json',
        },
    });

    if (!response.ok) {
        throw new Error(`Failed to fetch languages for ${repoFullName}: ${response.status}`);
    }

    return await response.json();
}
