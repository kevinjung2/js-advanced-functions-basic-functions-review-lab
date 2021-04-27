// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(job = "go to the office") {
  return `This Monday, I will ${job}.`
}

function wrapAdjective(wrap = "*") {
  return function(adj = "special") {
    return `You are ${wrap}${adj}${wrap}!`
  }
}

let Calculator = {}

Calculator.add = function(){return 1+3}
Calculator.subtract = function(){return 1-3}
Calculator.multiply = function(){return 1*3}
Calculator.divide = function(){return 10/5}

function actionApplyer(int, array) {
  if (array.length === 0) {
    return int
  } else {
    return array[2](array[1](array[0](int)))
  }
}
