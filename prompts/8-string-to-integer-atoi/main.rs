use std::num::IntErrorKind;

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
            if ch == "0" && padding == false {
                padding = true;
            }
            continue;
        }

        // End loop when we hit a non digit char. Whitespaces are only allowed when the res var is empty.
        if !c.is_ascii_digit() || ch == " " {
            break;
        }

        res += &*ch;
    }

    match res.trim().parse::<i32>() {
        Ok(n) => n * sign,
        Err(e) if matches!(e.kind(), IntErrorKind::PosOverflow) => i32::MAX * sign,
        Err(_) => 0,
    }
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
