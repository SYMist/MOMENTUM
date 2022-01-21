const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2,'0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2,'0');
  let dayNum = date.getDay()

  if (dayNum == 0) {
    dayNum = 'SUN'
  } else if (dayNum == 1) {
    dayNum = 'MON'
  } else if (dayNum == 2) {
    dayNum = 'TUE'
  } else if (dayNum == 3) {
    dayNum = 'WED'
  } else if (dayNum == 4) {
    dayNum = 'THU'
  } else if (dayNum == 5) {
    dayNum = 'FRI'
  } else {
    dayNum = 'SAT'
  };

  clock.innerText = `${hours}H\n${minutes}M\n${seconds}S\n${dayNum}`;

}
getClock();
setInterval(getClock, 1000);
