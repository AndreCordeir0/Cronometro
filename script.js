window.onload = () =>{
  let segundosAtuais = 0;
  let millisegundosAtuais = 0;

  const spanSegundos = document.getElementById("span-segundos");
  const spanMillisegundos = document.getElementById("span-millisegundos");

  const stopbutton = document.getElementById("stop");
  const startbutton = document.getElementById("start");
  const resetbutton = document.getElementById("reset");
  let Interval;

  startbutton.onclick = () => {
    clearInterval(Interval);
    Interval = setInterval(startTimer,10)
  }

  stopbutton.onclick = () => {
      clearInterval(Interval);
  }

  resetbutton.onclick = () => {
    clearInterval(Interval);
    const initial = "00";
    spanSegundos.innerHTML = initial;
    spanMillisegundos.innerHTML = initial;
    segundosAtuais = 0;
    millisegundosAtuais = 0;
  }

  function startTimer(){
    millisegundosAtuais++;

    if(millisegundosAtuais <= 9){
      spanMillisegundos.innerHTML = "0" + millisegundosAtuais;
    }
    if (millisegundosAtuais > 9){
      spanMillisegundos.innerHTML = millisegundosAtuais;
    }
    if (millisegundosAtuais > 99) {
      segundosAtuais++;
      spanSegundos.innerHTML = "0" + segundosAtuais;
      millisegundosAtuais = 0;
      spanMillisegundos.innerHTML = "0" + 0;
    }
    if (segundosAtuais > 9){
      spanSegundos.innerHTML = segundosAtuais;
    }
  }

}