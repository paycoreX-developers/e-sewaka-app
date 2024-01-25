export const currencyHelper = (ammount: number) => {
    return new Intl.NumberFormat('id-ID', { style: "currency", currency: "IDR" }).format(
        ammount as number,
    )
}

export function getUID() {
    // Get the timestamp and convert 
    // it into alphanumeric input
    return Date.now().toString(36);
}