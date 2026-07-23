fn reverse_integer(x: i32) -> i32 {
    let mut int = x.abs();
    let mut res: i32 = 0;

    while int > 0 {
        // Use checked_mul and checked_add to throw when any math op overflows.
        res = match res.checked_mul(10).and_then(|r| r.checked_add(int % 10)) {
            Some(val) => val,
            None => return 0,
        };
        // Use div_euclid vs div_floor for zero deps and divisor is always positive.
        int = int.div_euclid(10);
    }

    res * x.signum()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_reverse_integer() {
        assert_eq!(reverse_integer(123), 321);
        assert_eq!(reverse_integer(-123), -321);
        assert_eq!(reverse_integer(120), 21);
        assert_eq!(reverse_integer(1234567899), 0);
        assert_eq!(reverse_integer(-1234567899), 0);
    }
}
