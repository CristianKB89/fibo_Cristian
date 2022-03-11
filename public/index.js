function time() {
  const fecha = new Date();
  let data = {
    hora: fecha.getHours() < 10 ? '0' + fecha.getHours() : fecha.getHours(),
    minute: fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes(),
    sec: fecha.getSeconds() < 10 ? '0' + fecha.getSeconds() : fecha.getSeconds(),
  };
  document.getElementById("hour").innerHTML = data.hora + ':' + data.minute + ':' + data.sec;
}

window.onload = function () {
  setInterval(time, 1000);
}

let list = document.getElementById("list")

function fibonacci() {
  const fecha = new Date();
  let minute = fecha.getMinutes() < 10 ? '0' + fecha.getMinutes() : fecha.getMinutes()
  let a = minute.toString()[0]
  let b = minute.toString()[1]
  let numA = parseInt(a, 10)
  let numB = parseInt(b, 10)
  let fibo = [numA, numB]
  for (let index = 2; index < fecha.getSeconds() + 2; index++) {
    fibo.push(fibo[index - 1] + fibo[index - 2]);
  }
  let p = document.createElement("p")
  list.appendChild(p)
  
  p.innerHTML = "resultado: " + fibo;
}

let button = document.getElementById('button')

button.addEventListener('click', (e) => {
  e.preventDefault();
  fibonacci()
})