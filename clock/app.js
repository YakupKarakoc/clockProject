var saatEl = document.getElementById("saat");
var dakikaEl = document.getElementById("dakika");
var saniyeEl = document.getElementById("saniye");
var pmamEl = document.getElementById("pmam");

function startSaat() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let pmam = "AM";

  if (h > 12) {
    h = h - 12;
    pmam = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  saatEl.innerText = h;
  dakikaEl.innerText = m;
  saniyeEl.innerText = s;
  pmamEl.innerText = pmam;

  setTimeout(() => {
    startSaat();
  }, 1000);
}

startSaat();
