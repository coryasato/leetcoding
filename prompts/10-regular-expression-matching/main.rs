// NOTE: Copying logic from the TS version and writing this for practice. I already know the logic here is
// no bueno and I should just use two queues / vecs and emit what I can as I use up the chars / tokens.

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
            // Any char match, move both cursors forward
            a += 1;
            b += 1;
        } else if ptn_char == '*' {
            // Multi match last char
            let last_ptn_char = p_vec[b.saturating_sub(1)];

            // If from here on we hit a match all ".*", return early entirely.
            if last_ptn_char == '.' {
                break;
            }

            // If the last seen char in ptn does not equal the current str char,
            // then we have have a splat mismatch.
            if last_ptn_char != str_char {
                res = false;
                break;
            }

            // While the current str char repeats, increment a
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
            // Both chars must match
            res = str_char == ptn_char;
            a += 1;
            b += 1;
        }

        if res == false {
            println!("LINE 58 FLASE");
            break;
        }
    }

    println!("A: #{a} | B: #{b} | res: #{res}");
    println!("A: #{} | B: #{}", s_vec.len(), p_vec.len());

    // There are more pattern chars to consume.
    if b < p_vec.len() {
        if (p_vec.len() - b) > 1 {
            res = false;
        } else {
            res = p_vec[p_vec.len() - 1] == '.';
        }
    }

    // There are more string chars to consume, the pattern was exhausted.
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
        assert_eq!(is_match("ab", ".*"), true);
        assert_eq!(is_match("ab", "abc"), false);
        assert_eq!(is_match("abbbbbbc", "ab*c"), true);
    }
}
