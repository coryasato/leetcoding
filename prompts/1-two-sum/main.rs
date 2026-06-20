use std::collections::HashMap;

// rustc --test main.rs && ./main --show-output

pub fn two_sum(nums: Vec<i32>, target: i32) -> [i32; 2] {
    let mut map: HashMap<i32, i32> = HashMap::new();
    let mut res = [-1, -1];

    for (i, num) in nums.iter().enumerate() {
        if let Some(prev_idx) = map.get(num).copied() {
            res = [prev_idx as i32, i as i32];
            break;
        }

        // Builds a hashmap of remaining differences mapped to their indices. { [target - num] => idx }
        // When a subsequent entry matches a key in the hashmap, then we have our two indices.
        let remainder: i32 = target - num;
        map.insert(remainder, i as i32);
    }

    return res;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_two_sum() {
        assert_eq!(two_sum(vec![2, 7, 11, 15], 9), [0, 1]);
        assert_eq!(two_sum(vec![3, 2, 4], 6), [1, 2]);
        assert_eq!(two_sum(vec![3, 3], 6), [0, 1]);
    }
}
