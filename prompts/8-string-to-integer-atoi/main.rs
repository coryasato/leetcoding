fn my_atoi(s: &str) -> i32 {
    let chars: Vec<char> = s.chars().collect();
    let mut padding = false;
    let mut res = "".to_string();
    let mut sign: i32 = 1;

    for (_i, c) in chars.iter().enumerate() {
        let ch = c.to_string();

        // Capture negative sign if its starts a legal integer sequence.
        if res.len() == 0 && padding == false && (ch == "-" || ch == "+") {
            sign = if ch == "-" { -1 } else { 1 };
            continue;
        }

        // 1) Ignore leading whitespaces and zeroes.
        // 2) Track a padding count to inform us of any leading zeroes. This will help us determine illegal future signs.
        if res.len() == 0 && (ch == " " || ch == "0") {
            if ch == "0" && !padding {
                padding = true;
            }
            continue;
        }

        // End loop when we hit a non digit char. Whitespaces are only allowed when the res var is empty.
        if !c.is_ascii_digit() || ch == " " {
            break;
        }

        // TODO: Remove trim hack.
        res += ch.trim();
    }

    // TODO: See if we can handle this in a match along with the note below on line 37.
    if res.is_empty() {
        return 0;
    }

    // TODO: Consider using a match and early return in the error block.
    // We do know that only digits can make it this far, however we should still check if
    // the parse errors because of an i32 overflow or something else. Right now we're assuming
    // if pos_num is 0 then we had an overflow. This is brittle.
    let pos_num: i32 = res.trim().parse::<i32>().unwrap_or(0);

    if pos_num == 0 {
        return i32::MAX * sign;
    }

    pos_num * sign
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_my_atoi() {
        assert_eq!(my_atoi("42"), 42);
        assert_eq!(my_atoi(" -042"), -42);
        assert_eq!(my_atoi("1337c0d3"), 1337);
        assert_eq!(my_atoi("0-1"), 0);
        assert_eq!(my_atoi("2147483648"), 2147483647);
        assert_eq!(my_atoi("-2147483648"), -2147483647);
    }
}
