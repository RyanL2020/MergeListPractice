let list1 = [5,3,4,6,7]
let list2 = [9,5,7,8,6,4]

// one way to merge two arrays of numbers
var mergeTwoLists = function(list1, list2) {
// concat function combines two arrays and puts them in a new array
  newArray = list1.concat(list2)
// sort function sorts the elements in the arrray in acsending order
  newSortedArray = newArray.sort()
 console.log(newSortedArray)
};

console.log(mergeTwoLists(list1,list2))