// 253. Meeting Rooms II - https://leetcode.com/problems/meeting-rooms-ii/
// Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

// Example 1:
// Input: [[0, 30],[5, 10],[15, 20]]
// Output: 2

// Example 2:
// Input: [[7,10],[2,4]]
// Output: 1

// NOTE: Refactored because the previous solution didn't account for subsequent used intervals.
// Example: For [[0, 30],[5, 10],[15, 20],[11,16]] the previous would have allowed [11,16] into the [5,10] room.
// The updated logic adds another level of depth that we need to loop through. Each room has its hour slots that each interval
// needs to be checked against. Unfortunetly we have 3 nested loops. We could merge hour ranges together when they are linearly connected to
// reduce the amount of items per room and sort others if we wanted to speed things up.
const minMeetingRooms = (intervals) => {
  const rooms = [ [intervals.shift()] ];

  intervals.forEach(interval => {
    let createNewRoom = true;

    for (let i = 0; i < rooms.length; i++) {
      const room = rooms[i];
      let conflict = false;

      for (let j = 0; j < room.length; j++) {
        const hours = room[j];

        if (interval[0] < hours[1] && interval[1] > hours[0]) {
          conflict = true;
          break;
        }
      }

      if (!conflict) {
        room.push(interval);
        createNewRoom = false;
        break;
      }
    }

    if (createNewRoom) {
      rooms.push([interval]);
    }
  });

  return rooms.length;
};

export default minMeetingRooms;
