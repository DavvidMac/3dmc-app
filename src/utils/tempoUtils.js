/**
 *Soma um array de hora no formato ["11:02", "12:00"]
 */
function somaHora(timeArray) {
    let mins = timeArray.reduce((acc, time) => {
        let [h, m] = time.split(':');
        acc += h * 60 + m * 1;
        return acc;
    }, 0);
    return (mins / 60 | 0) + ':' + ('0' + (mins % 60)).slice(-2);
}

export { somaHora }