// cutting text function
export function cutText(text: string, max: number) {
    return text.slice(0, max)
}
// make capital the first letter in a string
export function firstLetterCapital(str: string) {
    return `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`; 
}
