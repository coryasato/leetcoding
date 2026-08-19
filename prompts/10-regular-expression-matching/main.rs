pub fn is_match(string: &str, pattern: &str) -> bool {
    if pattern == ".*" {
        return true;
    }

    let s_vec: Vec<char> = string.chars().collect();
    let p_vec: Vec<char> = pattern.chars().collect();

    let mut a: usize = 0;
    let mut b: usize = 0;
    let mut res = true;

    while a < s_vec.len() && b < p_vec.len() {
        let str_char = s_vec[a];
        let ptn_char = p_vec[b];

        if ptn_char == '.' {
            // Any char match, move both cursors forward.
            a += 1;
            b += 1;
        } else if ptn_char == '*' {
            // Zero or more match on the last pattern char token.
            let last_ptn_char = p_vec[b.saturating_sub(1)];

            // If the current string char does not equal the last pattern char token,
            // then the splat becomes meaningless and we should move to the next pattern token.
            if str_char != last_ptn_char {
                b += 1;
                continue;
            }

            // From here the current string char equals the last pattern char token and
            // we want to see how many forward matching chars are repeated in s_vec. We want
            // to fast forward until the char changes or we hit the end of the vec.
            let mut temp_index = a;
            let mut temp_str_char = str_char.clone();
            while str_char == temp_str_char && temp_index < s_vec.len() {
                temp_index += 1;

                if temp_index < s_vec.len() {
                    temp_str_char = s_vec[temp_index];
                }
            }

            a = temp_index;
            b += 1;
        } else {
            // Both chars must match.
            res = str_char == ptn_char;
            a += 1;
            b += 1;

            // Early return from main fn.
            if res == false {
                return false;
            }
        }
    }

    // Past this point we either have:
    // 1) more pattern tokens to check and only splats can be legal,
    // 2) non-exhausted string chars, meaning not enough pattern tokens to match the input
    // 3) or a valid match.
    if a >= s_vec.len() && b < p_vec.len() {
        let remaining_is_splats: bool = p_vec[b..].iter().all(|&c| c == '*');

        if !remaining_is_splats {
            res = false;
        }
    }

    if a < s_vec.len() {
        res = false;
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_is_match() {
        assert_eq!(is_match("aa", "a"), false);
        assert_eq!(is_match("aa", "a*"), true);
        assert_eq!(is_match("ab", "a*"), false);
        assert_eq!(is_match("ab", ".*"), true);
        assert_eq!(is_match("ab", "abc"), false);
        assert_eq!(is_match("abc", "ab"), false);
        assert_eq!(is_match("abbbbbbc", "ab*c*"), true);
    }
}
