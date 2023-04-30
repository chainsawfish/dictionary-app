export const sortWords = (words: any[]): any[] => {
    return words.slice().sort((a,b) => a.wordText - b.wordText)
}
