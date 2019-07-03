/**
 * Method to convert currency to USD format
 * @param money
 * @returns {string}
 */
export const convertMoney = ( money ) => {
    const formatter = new Intl.NumberFormat( 'en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    } );
    return formatter.format( money );
};