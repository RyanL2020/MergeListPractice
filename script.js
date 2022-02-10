let l1 = [1,2,3]
let l2 = [4,5,6]

// // one way to merge two arrays of numbers
// var mergeTwoLists = function(list1, list2) {
// // concat function combines two arrays and puts them in a new array
//   newArray = list1.concat(list2)
// // sort function sorts the elements in the arrray in acsending order
//   newSortedArray = newArray.sort()
//  console.log(newSortedArray)
// };
//  let nums = [3,2,2,3]
//  let val = 3
// var removeElement = function(nums, val) {
//     while (nums.length < val ) {
//       return nums
//     }
// };
// var removeElement = function (nums, val) {
//     let j = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== val) {
//             nums[j++] = nums[i];
//         }
//     }

//     //nums.length = j; // Chop the surplus values - not needed for LC submission
//     return j;
// };
// var removeElement = function (nums, val) {
//     nums = nums.filter((num) => num !== val);
//     return nums;
// };
//  console.log(removeElement(nums, val));
// let digits = [1,2,3]
// var plusOne = function(digits) {
//   let newArray = []
//   let largest = digits[0];
//   for (let i = 0; i < digits.length ; i++) {
//     if (largest < digits[i]) {
//       largest = digits[i] + 1

//     }
//   }
//    console.log(largest)
    
// };
// plusOne(digits)

var myStringArray = [1,2,3];
var arrayLength = myStringArray.length;
var newArray = []
for (var i = 0; i < arrayLength; i++) {
    if (myStringArray[i] > 2) {
      newArray.push(myStringArray[i] + 1)
       console.log(newArray)
    }
}