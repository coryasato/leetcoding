pub fn max_area(height: Vec<i32>) -> i32 {
    let mut a: usize = 0;
    let mut b: usize = height.len() - 1;
    let mut res = 0;

    while a < b {
        let front = height[a];
        let back = height[b];
        let area = ((b - a) as i32) * front.min(back);

        res = res.max(area);

        if front <= back {
            a += 1;
        } else {
            b -= 1;
        }
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_max_area() {
        assert_eq!(max_area(vec![1, 8, 6, 2, 5, 4, 8, 3, 7]), 49);
        assert_eq!(max_area(vec![1, 1]), 1);
        assert_eq!(max_area(vec![1, 7, 6, 2, 4, 8, 7, 3]), 35);
        assert_eq!(max_area(vec![1, 4, 2, 4, 1]), 8);
    }
}
