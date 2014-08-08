function mean(arg){

  var arr   = arg.slice(2, arg.length),
      len   = arr.length,
      total = 0;

  for (var i = 0; i < len; i++) {
     total += arr[i] * 1;
  }

  return console.log('Mean is ' + total / len);
}

mean(process.argv);

function median(arg){
  var arr   = arg.slice(2, arg.length),
    len   = arr.length,
    result, first, second;

  // MDN sort code starts
  arr.sort(function(a, b) {
      return a - b;
  });
  // MDN sort code ends

  first = ( len - 1 ) / 2;

  if ( len % 2 === 0 ) {
    second = first + 1;
    result = (arr.slice(first, second) * 1 + arr.slice(second, second + 1) * 1) / 2;
  } else {
    result = arr[first];
  }

  return console.log("Median is " + result);
}

median(process.argv);


function mode (arg) {
  var arr   = arg.slice(2, arg.length),
      countArr = {},
      num,
      answer;

  for (var i = 0; i < arr.length; i++) {
    num = parseInt(arr[i]);
    countArr[num] ? countArr[num]++ : countArr[num] = 1;
  }

  for (var prop in countArr) {
    if(countArr.hasOwnProperty(prop)){
      if (countArr[prop] > 1 && answer === undefined){
        answer = prop;
      }else if (countArr[prop] > countArr[answer]){
        answer = prop;
      }
    }
  }
  return console.log("Mode is " + answer);

}

mode(process.argv);




