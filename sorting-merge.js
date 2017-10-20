/*
  Merge Sort

  Very useful and will use most often.

  Javascript array.sort() uses merge sort, Firefox might use quick sort
  depending on data type. Used because it's very consistent and dependable.
 */

const mergeSort = (nums) => {
  if (nums.length < 2) {
    return nums;
  };

  console.log(nums);

  const length = nums.length;
  // console.log('Length: ', length);
  const middle = Math.floor(length / 2);
  // console.log('Middle: ', middle);
  const left = nums.slice(0, middle);
  console.log('Left: ', left);
  const right = nums.slice(middle, length);
  console.log('Right: ', right);

  console.log('-----------');

  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  console.log('-----Sorted------');
  console.log(sortedLeft);
  console.log(sortedRight);
  console.log('-----End of Sorted------');

  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const results = [];

  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }

  return results;
};

var a = [34,12,2];
console.log(mergeSort(a));
