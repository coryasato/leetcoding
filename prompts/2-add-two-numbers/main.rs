// TODO: Move the LL helpers into its own file.

pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

fn from_vec(vec: Vec<i32>) -> Option<Box<ListNode>> {
    let mut head = None;
    let mut current = &mut head;

    for val in vec {
        // Assign a new node to the current pointer position
        *current = Some(Box::new(ListNode::new(val)));
        // Advance the mutable pointer to point to the `next` field of the new node
        current = &mut current.as_mut().unwrap().next;
    }

    head
}

pub fn add_two_numbers_ll(l1: Vec<i32>, l2: Vec<i32>) -> Vec<i32> {
    let mut list1 = from_vec(l1);
    let mut list2 = from_vec(l2);

    let mut remainder = 0;
    let mut res: Vec<i32> = vec![];

    loop {
        if list1.is_none() && list2.is_none() {
            break;
        }

        let mut a = 0;
        let mut b = 0;

        if let Some(node) = list1 {
            a = node.val;
            list1 = node.next;
        }

        if let Some(node) = list2 {
            b = node.val;
            list2 = node.next;
        }

        let sum = a + b + remainder;

        if sum > 9 {
            remainder = 1;
            res.insert(res.len(), sum % 10);
        } else {
            remainder = 0;
            res.insert(res.len(), sum);
        }
    }

    if remainder > 0 {
        res.insert(res.len(), remainder);
    }

    res
}

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
    fn test_add_two_numbers_ll() {
        assert_eq!(
            add_two_numbers_ll(vec![2, 4, 3], vec![5, 6, 4]),
            vec![7, 0, 8]
        );
        assert_eq!(add_two_numbers_ll(vec![0], vec![0]), vec![0]);
        assert_eq!(
            add_two_numbers_ll(vec![9, 9, 9, 9, 9, 9, 9], vec![9, 9, 9, 9]),
            vec![8, 9, 9, 9, 0, 0, 0, 1]
        );
    }

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
