export const sortWords = (words: string[]): string[] => {
    return words.slice().sort((a,b) => a.localeCompare(b))
}