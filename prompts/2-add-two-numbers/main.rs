// Note: I need to use the std LinkedList or create my own to mirror LeetCodes expection.
// The below code bascially does what we'd do with a LinkedList, just iterate through the lists and
// carry a remainder.

pub fn add_two_numbers(l1: Vec<i32>, l2: Vec<i32>) -> Vec<i32> {
    let mut i = 0;
    let mut remainder = 0;
    let mut res: Vec<i32> = vec![];

    loop {
        if i >= l1.len() && i >= l2.len() {
            break;
        }

        let a = l1.get(i).unwrap_or(&0);
        let b = l2.get(i).unwrap_or(&0);
        let sum = a + b + remainder;

        if sum > 9 {
            remainder = 1;
            res.insert(i, sum % 10);
        } else {
            remainder = 0;
            res.insert(i, sum);
        }

        i += 1;
    }

    if remainder > 0 {
        res.insert(res.len(), remainder);
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_add_two_numbers() {
        assert_eq!(add_two_numbers(vec![2, 4, 3], vec![5, 6, 4]), vec![7, 0, 8]);
        assert_eq!(add_two_numbers(vec![0], vec![0]), vec![0]);
        assert_eq!(
            add_two_numbers(vec![9, 9, 9, 9, 9, 9, 9], vec![9, 9, 9, 9]),
            vec![8, 9, 9, 9, 0, 0, 0, 1]
        );
    }
}
