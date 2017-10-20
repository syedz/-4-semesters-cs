/*
  Will never use Bubble sort.
 */

 var bubbleSort = nums => {
   var counter = 1;
   do {
     var swapped = false;
     for (var i = 0; i < nums.length; i++) {
       console.log(counter + ": " + nums);
       counter++;
       if (nums[i] > nums[i+1]) {
         var temp = nums[i];
         nums[i] = nums[i+1];
         nums[i+1] = temp;
         swapped = true;
       }
     }
   } while(swapped);
   return nums;
 };

var a = [10,9,8,7,6,5,4,3,2,1];
console.log(bubbleSort(a));
