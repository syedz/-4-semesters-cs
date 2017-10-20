/*
  Quick sort

  When Javascript isn't doing merge sort it's doing quick sort.
 */

const quickSort = (nums) => {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length-1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  const sortedLeft = quickSort(left);
  const sortedRight = quickSort(right);

  return sortedLeft.concat(pivot, sortedRight);
};

let a = [3,4,5,2,1,34,6];
console.log(quickSort(a));
