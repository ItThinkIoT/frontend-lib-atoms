export function truncateFixedAmount(numberAsString: string, fractions = 2): string {
    if (fractions < 0) throw new Error(`Fractions must be more than or equal to zero`)
    if(fractions == 0) return String(Math.floor(Number(numberAsString)))
    if (fractions > 18) throw new Error(`Fractions must be less or equals than 18`)
    if (isNaN(Number(numberAsString))) throw new Error(`Number ${numberAsString} is not a number`)

    let indexPoint = numberAsString.indexOf(".")
    if (indexPoint === -1) indexPoint = numberAsString.length

    let integerPart = numberAsString.slice(0, indexPoint)
    if (integerPart === "") integerPart = "0"

    let fractionsPart = numberAsString.slice(indexPoint + 1)
    if (fractionsPart === "") fractionsPart = "0"
    fractionsPart = fractionsPart.slice(0, fractions).padEnd(fractions, "0")

    return `${integerPart}.${fractionsPart}`
}

export function fromNumberToString(number: number): string {
    return ('' + +number).replace(/(-?)(\d*)\.?(\d*)e([+-]\d+)/,
        function (a, b, c, d, e) {
            return e < 0
                ? b + '0.' + Array(1 - e - c.length).join("0") + c + d
                : b + c + d + Array(e - d.length + 1).join("0");
        })
}