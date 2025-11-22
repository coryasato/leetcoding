// 253. Meeting Rooms II - https://leetcode.com/problems/meeting-rooms-ii/
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

const minMeetingRooms = (intervals) => {
  const rooms = [intervals.shift()];

  intervals.forEach(interval => {
    let conflict = true;

    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];

      if (interval[0] < room[1] && interval[1] > room[0]) {
        continue;
      } else {
        conflict = false;
        break;
      }
    }

    if (conflict) {
      rooms.push(interval);
    }
  });

  return rooms.length;
};

export default minMeetingRooms;
