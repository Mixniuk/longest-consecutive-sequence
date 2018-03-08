module.exports = function longestConsecutiveLength(array) {
  if(!array.length) return 0;
  array.sort((left, right) => left - right);
  let max = 1;
  let k = 1;
  for (let i = 0; i < array.length-1; i++) {
    if((array[i]+1) == array[i+1]) k++;
    else {
      if(max < k) max = k;
      if(array[i] == array[i+1]);
      else k = 1;
    }
  }
  return max;
}