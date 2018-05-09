var number
function add(a, b) {
  number = a + b
  return `${number}`
}
// CORRECT

function subtract(a, b) {
  number = a - b
  return `${number}`
}
// CORRECT

function multiply(a, b) {
  number = a * b
  return `${number}`
}
// CORRECT

function divide(a, b) {
  number = a / b
  return `${number}`
}
// CORRECT

function inc(a) {
  number = a + 1
  return `${number}`
}
// CORRECT

function dec(a) {
  number = a - 1
  return `${number}`
}
// CORRECT

function makeInt(a) {
  parseInt(a, 10)
  return `${parseInt}`
}
// CORRECT

function preserveDecimal(a) {
  parseFloat(a)
  return `${parseFloat}`
}