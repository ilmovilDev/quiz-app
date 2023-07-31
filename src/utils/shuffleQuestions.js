export const shuffleQuestions = (array) => {
    const newArray = array.sort(() => Math.random() - 0.5)
    return newArray.slice(0, 5);
}