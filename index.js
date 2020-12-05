function clock() {
    var horas = document.getElementById('hour');
    var minutos = document.getElementById('min');
    var segundos = document.getElementById('sec');
  
    var h = new Date ().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();

    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
}

var interval = setInterval(clock , 1000)