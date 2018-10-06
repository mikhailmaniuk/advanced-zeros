module.exports = function getZerosCount(number, base) {

  let baseSyst = base,
      root = Math.floor(Math.sqrt(base)),
      divisorArr = [],
      divisorPowArr = [],
      f = 1,
      i = 2;

  for(i; i <= root; ++i) {
    if ((i != 2) && (i%2 == 0))
      continue;
    if ((i != 3) && (i%3 == 0))
      continue;

    let rem = baseSyst % i;
    if (rem == 0) {	
      if (divisorArr.length > 0 && divisorArr[divisorArr.length - 1] === i) {
        divisorPowArr[divisorPowArr.length - 1] += 1;
      } else {
        divisorArr.push(i);
        divisorPowArr.push(1);
      }
      baseSyst = baseSyst/i;
      root = Math.floor(Math.sqrt(baseSyst));
      i = 1;
      f +=1;
    }	
  }
  
  if (i > root && baseSyst != 1) {
    if (baseSyst == divisorArr[divisorArr.length - 1]) {
      divisorPowArr.push(divisorPowArr.pop() + 1);
    } else {
      divisorArr[divisorArr.length] = baseSyst;
      divisorPowArr.push(1);
    }
  }
  
  let zerosArr = [];
  for (let s = 0; s < divisorArr.length ;s++) {
    let d = 1, 
        m = 0, 
        M = 0,
        g = true;

    while(g == true){
      m = Math.floor(number / Math.pow(divisorArr[s], d));
      d += 1;
      if(m < 1) {
        g = false;
      }
      M += m;
    }
    
    M = Math.floor(M / divisorPowArr[s]);
    zerosArr.push(M);
  }

  var min = Math.min(...zerosArr);
  return min;
}