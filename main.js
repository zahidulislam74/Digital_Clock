function getTime() {
  let hours = document.getElementById("hour");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();

  const am = h >= 12 ? "PM" : "AM";

  // convert 24 hr to 12hr
  if (h > 12) {
    h = h - 12;
  }
  //add 0 before single digit
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hours.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;
  ampm.innerHTML = am;
}
setInterval(getTime, 1000);
