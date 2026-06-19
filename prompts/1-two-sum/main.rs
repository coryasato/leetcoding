// rustc --test main.rs && ./main --show-output

// Note: First loops with Rust!
// 1. Change the two variables to a vec. Whats the Rust best practice for nulls? We want to check if
// 2. Using for_each is functional here and like JS is forcing us to continue looping even after we are done finding out answer.
//    Revert to for loops and break clauses instead of a top level flag.
pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<usize> {
    // println!("nums: {nums:?} | target: {target}");

    let mut a = 0;
    let mut b = 0;

    nums.iter().enumerate().for_each(|(i, num)| {
        println!("{num}");

        nums.iter()
            .enumerate()
            .skip(i + 1)
            .for_each(|(j, next_num)| {
                // println!("{j} \\ {next_num}");
                if (num + next_num == target) {
                    a = i;
                    b = j;
                    return;
                }
            });
    });

    return vec![a, b];
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_two_sum() {
        assert_eq!(two_sum(vec![2, 7, 11, 15], 9), vec![0, 1]);
        assert_eq!(two_sum(vec![3, 2, 4], 6), vec![1, 2]);
    }
}
