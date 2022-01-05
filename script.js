window.onload = function(){
let sec = 00;
let nsei= 00;
 let nseic = document.getElementById("nsei");
 let secc = document.getElementById("sec");

 let stopbutton = document.getElementById("stop");
 let startbutton = document.getElementById("start");
 let resetbutton = document.getElementById("reset");
let Interval;

startbutton.onclick = function(){

    clearInterval(Interval);
 Interval = setInterval(startTimer,10)
}

stopbutton.onclick = function() {
    clearInterval(Interval);
}


resetbutton.onclick = function() {
  clearInterval(Interval);
 nsei = "00";
   sec = "00";
 nseic.innerHTML = nsei;
   secc.innerHTML = sec;
}

function startTimer(){
    nsei++;
    if(nsei <= 9){
        nseic.innerHTML = "0" + nsei;
      }
      
      if (nsei > 9){
        nseic.innerHTML = nsei;
        
      } 
      if (nsei > 99) {
        console.log("sec");
        sec++;
        secc.innerHTML = "0" + sec;
        nsei = 0;
        nseic.innerHTML = "0" + 0;
      }

      if (sec > 9){
        secc.innerHTML = sec;
      }
}
}