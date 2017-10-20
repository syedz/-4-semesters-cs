/*
  Insertion Sort

  Useful for sorted, or almost sorted. Will actually use in real life.
 */

const insertionSort = (nums) => {
  var counter = 1;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      console.log(counter + ": " + nums);
      counter++;
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1);
        nums.splice(j, 0, spliced[0]);
      }
    }
  }
};

var a = [10,9,8,7,6,5,4,3,2,1];
console.log(insertionSort(a));
