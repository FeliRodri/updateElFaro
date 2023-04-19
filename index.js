const $time = document.querySelector('.time'),
    $fecha = document.querySelector('.fecha');

function Clock() {
    let f = new Date(),
        day = f.getDate(),
        month = f.getMonth() + 1,
        year = f.getFullYear(),
        dayWeek = f.getDay();

    day = ('0' + day).slice(-2);
    month = ('0' + month).slice(-2)

    let timeString = f.toLocaleTimeString()
    $time.innerHTML = timeString;

    let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    let showWeek = (week[dayWeek])
    $fecha.innerHTML = `${showWeek}  ${day}/${month}/${year}`
}

setInterval(() => {
    Clock()
}, 1000);