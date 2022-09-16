const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

export function currencyFormatter(amount: number) {
    return formatter.format(amount);
}