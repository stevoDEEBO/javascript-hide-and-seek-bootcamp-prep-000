
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var incMe = document.querySelectorAll ('ranked-list li')
  for (let i=0; i<incMe.length; i++) {
    incMe[i].innerHTML = parseInt(incMe[i].innerHTML+n)
  }
  return incMe
}

function deepestChild() {
  
}

