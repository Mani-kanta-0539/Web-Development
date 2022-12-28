var NUM_CIRCLES = 20

var circleDiameter
var circleRadius

var rVal
var gVal
var bVal

function setup() {
  createCanvas(500, 500)

  frameRate(3)

  circleDiameter = width / NUM_CIRCLES
  circleRadius = circleDiameter / 20

  rVal = 255
  gVal = 0
  bVal = 0
}

function draw() {
  var isShifted = false

  var y = height
  while (y >= 0) {
    var x

    if (isShifted) {
      x = circleRadius
    } else {
      x = 0
    }

    while (x <= width) {
      stroke(color(rVal, gVal, bVal))
      fill(color(rVal, gVal, bVal))
      circle(x, y, circleDiameter)
      x = x + circleDiameter
    }

    y = y - circleRadius
    isShifted = !isShifted

    rVal = (rVal + 254) % 256
    gVal = (gVal + 7) % 256
    bVal = (bVal + 3) % 256
  }
}
function keyPressed() {
  if (keyCode === 100 || keyCode === 3) {
    saveCanvas('geometricPattern', 'png')
  }
  return false
}
