let list1 = [5,3,4,6,7]
let list2 = [9,5,7,8,6,4]


var mergeTwoLists = function(list1, list2) {
  newArray = list1.concat(list2)
  newSortedArray = newArray.sort()
 console.log(newSortedArray)
};

console.log(mergeTwoLists(list1,list2))