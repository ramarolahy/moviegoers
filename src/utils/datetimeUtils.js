/**
 * Method to convert time into hours and minutes.
 * @param time
 * @returns {string}
 */
export const calcTime = ( time ) => {
    const hours = Math.floor( time / 60 );
    const minutes = time % 60;
    return `${ hours }h ${ minutes }m`;
};