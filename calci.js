
function calculate() {
  let calculateType = document.querySelector('.typeCalcu').value;
  let sum ;
  let no1 = Number(document.getElementById('no1').value);
  let no2 = Number(document.getElementById('no2').value);
  // if(no1> 0 && no2 > 0) {
  //  if(calculateType=='add') {
  //    calculateInner = no1 + no2;
  //  } else if(calculateType=='sub') {
  //   calculateInner = no1 - no2;
  //  }else if(calculateType=='mul') {
  //   calculateInner = no1 * no2;
  //  }else if(calculateType=='divd') {
  //   calculateInner = no1 / no2;
  //  }
  switch(no1> 0 && no2 > 0) {
    case (calculateType=='add') :
    calculateInner =no1 + no2;
    break;
    case (calculateType=='sub') : 
     calculateInner = no1 - no2;
    break;
     case (calculateType=='mul') :
    calculateInner = no1 * no2;
     break;
    case (calculateType=='divd') : 
     calculateInner = no1 / no2;
     default:
    }
    let result = document.getElementById("sumid");
    result.innerHTML = calculateInner;
  }
