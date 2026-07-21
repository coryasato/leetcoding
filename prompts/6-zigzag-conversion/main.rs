fn safe_slice(text: &str, start: usize, end: usize) -> &str {
    let max_len = text.chars().count();
    let safe_end = end.min(max_len);

    text.get(start..safe_end).unwrap_or("")
}

pub fn convert(s: &str, num_rows: usize) -> String {
    let zig_zag_step_nm: usize = ((num_rows as f32) / 2.0).floor() as usize;
    let mut bucket: Vec<String> = vec![String::new(); num_rows];
    let mut i: usize = 0;
    let mut turn: u8 = 0;

    while i < s.len() {
        if turn == 0 {
            let slice = safe_slice(&s, i, i + num_rows);

            for (idx, c) in slice.chars().enumerate() {
                bucket[idx].push(c);
            }

            i += num_rows;
            turn = 1;
        } else {
            let slice = safe_slice(&s, i, i + zig_zag_step_nm);
            let chars_vec: Vec<char> = slice.chars().collect();
            let mut j: usize = 0;
            let mut tail: usize = bucket.len() - 2;

            while tail > 0 {
                bucket[tail].push(chars_vec[j]);
                tail -= 1;
                j += 1;
            }

            i += zig_zag_step_nm;
            turn = 0;
        }
    }

    bucket.join("")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_convert() {
        assert_eq!(convert("PAYPALISHIRING", 3), "PAHNAPLSIIGYIR");
        assert_eq!(convert("PAYPALISHIRING", 4), "PINALSIGYAHRPI");
    }
}
