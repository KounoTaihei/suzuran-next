export const getDate = (date: Date) => {
    const newDate = new Date(date);

    return newDate.getDate();
}