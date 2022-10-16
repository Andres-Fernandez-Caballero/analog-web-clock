(function() {
  setInterval(
    () => {
      calculateHorusDegrees()
      calculateMinutesDegrees()
      calculateSecondsDegrees()
    }, 1000
  )
})()

function linearMap(value, min, max, newMin, newMax) {
  return newMin + (newMax - newMin) * (value - min) / (max - min)
}

function calculateHorusDegrees() {
  const currentHour = new Date().getHours() - 12
  const angle = linearMap(currentHour, 0, 12, 0, 360)
  document.querySelector(".hours").style.transform = `rotate(${angle}deg`
}

function calculateMinutesDegrees() {
  const currentHour = new Date().getMinutes()
  const angle = linearMap(currentHour, 0, 60, 0, 360)
  document.querySelector(".minutes").style.transform = `rotate(${angle}deg`
}

function calculateSecondsDegrees() {
  const currentHour = new Date().getSeconds()
  const angle = linearMap(currentHour, 0, 60, 0, 360)
  document.querySelector(".seconds").style.transform = `rotate(${angle}deg`
}
