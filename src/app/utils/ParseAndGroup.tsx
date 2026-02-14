import { fetchRepositories, fetchLanguagesForRepo } from './GithubApiUtil';

interface Repo {
    name: string;
    full_name: string;
}

export async function groupReposByLanguage(token: string) {
    const repos: Repo[] = await fetchRepositories(token);
    const languageMap: Record<string, Repo[]> = {};

    for (const repo of repos) {
        const languages = await fetchLanguagesForRepo(token, repo.full_name);
        const languageKeys = Object.keys(languages);

        for (const lang of languageKeys) {
            if (!languageMap[lang]) {
                languageMap[lang] = [];
            }
            languageMap[lang].push({ name: repo.name, full_name: repo.full_name });
        }
    }

    return languageMap;
}
