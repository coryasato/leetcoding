// 295. Find Median from Data Stream - https://leetcode.com/problems/find-median-from-data-stream/

// The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value, and the median is the mean of the two middle values.

// For example, for arr = [2,3,4], the median is 3.
// For example, for arr = [2,3], the median is (2 + 3) / 2 = 2.5.
// Implement the MedianFinder class:

// MedianFinder() initializes the MedianFinder object.
// void addNum(int num) adds the integer num from the data stream to the data structure.
// double findMedian() returns the median of all elements so far. Answers within 10-5 of the actual answer will be accepted.

// Example 1:

// Input
// ["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
// [[], [1], [2], [], [3], []]
// Output
// [null, null, null, 1.5, null, 2.0]

// Explanation
// MedianFinder medianFinder = new MedianFinder();
// medianFinder.addNum(1);    // arr = [1]
// medianFinder.addNum(2);    // arr = [1, 2]
// medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
// medianFinder.addNum(3);    // arr[1, 2, 3]
// medianFinder.findMedian(); // return 2.0

// Constraints:
// -105 <= num <= 105
// There will be at least one element in the data structure before calling findMedian.
// At most 5 * 104 calls will be made to addNum and findMedian.

// Follow up:
// If all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?
// If 99% of all integer numbers from the stream are in the range [0, 100], how would you optimize your solution?

class MedianFinder {
  constructor() {
    this.nums = [];
  }

  // NOTE: Using mutative methods. Shift & Splice could be slow. If we wanted optimize, consider non-mutative slices & concats.
  #insertNum(num) {
    if (this.nums.length === 0) {
      this.nums.push(num);
      return;
    }

    // Directly insert the num into the array if we know the lower and upper bounds.
    if (this.nums[0] > num) {
      this.nums.unshift(num);
      return;
    }
    if (this.nums[this.nums.length-1] < num) {
      this.nums.push(num)
      return;
    }

    // From here forward we have a length of 2 or more and need to iterate through to find the proper index.
    let start = 0;
    let end = this.nums.length - 1;
    let idx = -1;

    while (start < end) {
      let mid = start + Math.floor((end - start) / 2);

      if (this.nums[mid] <= num && this.nums[mid+1] > num) {
        idx = mid+1;
        break;
      } else if (this.nums[mid] < num) {
        start = mid+1;
      } else {
        end = mid;
      }
    }

    this.nums.splice(idx, 0, num);
  }

  addNum(num) {
    this.#insertNum(num);
    return this.nums;
  }

  findMedian() {
    const mid = Math.floor((this.nums.length-1) / 2);

    if (this.nums.length % 2 === 0) {
      return Number.parseFloat((this.nums[mid] + this.nums[mid+1]) / 2);
    } else {
      return this.nums[mid];
    }
  }
};

export default MedianFinder;