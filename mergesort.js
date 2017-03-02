function bubbleSort(array){
  var result = array;
  debugger;
  for (var i = 0; i < result.length; i++) {
    for (var j = 0; j < result.length; j++) {
      var first = result[j],
      second = result[j + 1];
      if (first > second) {
        result[j] = second;
        result[j + 1] = first;
      }
    }
  }
  return result
}
