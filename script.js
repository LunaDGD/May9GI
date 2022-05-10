"use strict";

//----EASY----//
let arr = [10, 20, 30, 40, 50, 60];

// function reducer(accumulator, currentValue) {
//   return accumulator + currentValue;
// }

// let sum = numbers.reduce(sum_reducer);
// let avg = sum / numbers.length;
// console.log(avg);

function getAvg(arr) {
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return total / arr.length;
}

const average = getAvg(arr);
console.log(average);

//----MEDIUM----//
// let search = function (nums, target) {
//   if (nums.length == 0 || nums == null) return -1;

//   let left = 0;
//   let right = nums.length - 1;

//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] > nums[right]) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }

//   let pivot = left;
//   left = 0;
//   right = nums.length - 1;

//   if (nums[pivot] <= target && target <= nums[right]) {
//     left = pivot;
//   } else {
//     right = pivot;
//   }

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     //console.log(mid , nums[mid] , target);
//     if (nums[mid] == target) {
//       return mid;
//     }
//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
//   return -1;
// };

// search([0, 1, 2, 3, 4, 5, 6, 7], 0);

//-----VERY HARD----//

function minCoinChange(coins, amount) {
  // create an array to hold the minimum number of coins to make each amount
  // amount + 1 so that you will have indices from 0 to amount in the array
  const minCoins = new Array(amount + 1).fill(Infinity);
  // there are 0 ways to make amount 0 with positive coin values
  minCoins[0] = 0;
  // look at one coin at a time
  for (let coin of coins) {
    for (let i = 0; i <= amount; i += 1) {
      // make sure the difference between the current amount and the current coin is at least 0
      // replace the minimum value
      if (i - coin >= 0)
        minCoins[i] = Math.min(minCoins[i], minCoins[i - coin] + 1);
    }
  }
  // if the value remains Infinity, it means that no coin combination can make that amount
  return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
}
minCoinChange((1, 2, 5), 11);
