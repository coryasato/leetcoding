pub fn is_palindrome(x: i32) -> bool {
    // Negatives not allowed.
    if x < 0 {
        return false;
    }
    // Honor 0-9 as valid palindromes. We cannot use the ilog10 on zero.
    if x >= 0 && x < 10 {
        return true;
    }

    let digit_len = x.ilog10() + 1;
    let mut clone = x;
    let mut mirror: i32 = 0;
    let mut pivot: usize = (digit_len as f32 / 2.0).floor() as usize;

    while pivot > 0 {
        mirror = (mirror * 10) + (clone % 10);
        clone = clone / 10;
        pivot -= 1;
    }

    if digit_len % 2 != 0 {
        clone = clone / 10;
    }

    return clone == mirror;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_palindrome() {
        assert_eq!(is_palindrome(0), true);
        assert_eq!(is_palindrome(121), true);
        assert_eq!(is_palindrome(-121), false);
        assert_eq!(is_palindrome(12345), false);
        assert_eq!(is_palindrome(11), true);
        assert_eq!(is_palindrome(42066024), true);
        assert_eq!(is_palindrome(42067024), false);
    }
}
