const CURRENCY_FORMATTER = new Intl.NumberFormat('it-IT', {
    currency: "EUR",
    style: "currency"
})

export function formatCurrency(number: number){
    return CURRENCY_FORMATTER.format(number)
}