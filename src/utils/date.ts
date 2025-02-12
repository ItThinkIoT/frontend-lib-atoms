export function toLocalDate(date: number | string | Date) : Date {
    if(typeof date === "number") return new Date(date)
    if(typeof date === "string") return new Date(date)
    return date
}