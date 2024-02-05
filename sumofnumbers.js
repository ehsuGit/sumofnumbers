function sumFor(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total;
}
function sumWhile(nums) {
  let i = 0;
  let total = 0;
  while (i < nums.length) {
    total += nums[i];
    i++;
  }
  return total;
}
function sumRecursion(nums) {
  if (nums.length !== 0) {
    return sumRecursion(nums) + sumRecursion(pop(nums));
  }
  return 0;
}
function sumTheSimpleWay(nums) {
  return _.reduce(nums, function (num, memo) { return memo + num; }, 0);
}

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(sumFor(test));
console.log(sumWhile(test));
console.log(sumTheSimpleWay(test));
console.log(sumRecursion(test));
