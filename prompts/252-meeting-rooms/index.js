// Meeting Rooms - https://leetcode.com/problems/meeting-rooms/

// Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), determine if a person could add all meetings to their schedule without any conflicts.

// Note: (0,8),(8,10) is not considered a conflict at 8

// Example 1:
// Input: intervals = [(0,30),(5,10),(15,20)]
// Output: false
// Explanation:
// (0,30) and (5,10) will conflict
// (0,30) and (15,20) will conflict

// Example 2:
// Input: intervals = [(5,8),(9,15)]
// Output: true

// NOTE: intervals was changed to be a 2d array. The prompt says an dict (array of objects). Easy to change if we wanted to.
const canAttendMeetings = (intervals) => {
  let res = true;

  for (let i = 0, j = 1; j < intervals.length; i++, j++) {
    const curr = intervals[i];
    const next = intervals[j];

    // NOTE: This is overchecking the condition if we assume an interval's start time will be less than the end time.
    // In that case the last condition is all we need.
    if (curr[0] < curr[1] && next[0] < next[1] && curr[1] < next[0]) {
      continue;
    } else {
      res = false;
      break;
    }
  }

  return res;
};

export default canAttendMeetings;
