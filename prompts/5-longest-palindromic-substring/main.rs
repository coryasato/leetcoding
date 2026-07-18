use std::collections::HashMap;

#[allow(dead_code)]
fn is_palindrome_slower(s: &str) -> bool {
    let chars: Vec<char> = s.chars().collect();

    if chars.is_empty() {
        return true;
    }

    let mut i: usize = 0;
    let mut j: usize = chars.len() - 1;

    while i < j {
        if chars[i] != chars[j] {
            return false;
        }
        i += 1;
        j -= 1;
    }

    true
}

// DoubleEndedIterator version.
fn is_palindrome(text: &str) -> bool {
    let mut chars = text.chars();

    while let (Some(front), Some(back)) = (chars.next(), chars.next_back()) {
        if front != back {
            return false;
        }
    }

    true
}

pub fn longest_palindrome(text: &str) -> &str {
    let chars: Vec<char> = text.chars().collect();
    let mut candidates: Vec<(usize, usize)> = Vec::new();
    let mut char_map: HashMap<char, Vec<usize>> = HashMap::new();
    let mut res = "";

    for (idx, &c) in chars.iter().enumerate() {
        if let Some(char_idxs) = char_map.get_mut(&c) {
            if char_idxs.len() < 2 {
                candidates.push((char_idxs[0], idx));
            } else {
                // For each previous index per char, create range tuples for the prior indices
                // and the current index as any could be a possible candidate.
                for &char_idx in char_idxs.iter() {
                    candidates.push((char_idx, idx));
                }
            }

            char_idxs.push(idx);
        } else {
            char_map.insert(c, vec![idx]);
        }
    }

    for (start, end) in candidates {
        if let Some(sub_str) = text.get(start..end + 1) {
            if is_palindrome(sub_str) && sub_str.len() > res.len() {
                res = sub_str;
            }
        }
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_longest_palindrome() {
        assert_eq!(longest_palindrome("babad"), "bab");
        assert_eq!(longest_palindrome("cbbd"), "bb");
        assert_eq!(longest_palindrome("adadeifiedboob"), "deified");
        assert_eq!(longest_palindrome("assacivic12344321"), "12344321");
    }
}
