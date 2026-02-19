/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const info = {};
    const threshold = Math.floor(nums.length / 2);

  for (let num of nums) {
    info[num] = (info[num] || 0) + 1;
  }

  for (let key in info) {
    if (info[key] > threshold) {
      return Number(key);
    }
  }
};