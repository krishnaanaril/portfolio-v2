export default function getFormattedDate(utcDate: string) {
    const actualDate = new Date(utcDate);
    return actualDate.toLocaleString('default', {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}