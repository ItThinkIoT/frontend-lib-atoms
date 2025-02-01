export function shortAddress(address: string, characters = 6) {
    if (address.length <= characters * 2) characters = 4
    return `${address.slice(0,characters)}...${address.slice(-characters)}`
}