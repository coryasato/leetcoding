pub fn length_of_longest_substring(str: &str) -> String {
    let chars: Vec<char> = str.chars().collect();
    let mut candidate_set: Vec<char> = vec![];
    let mut candidate_str = String::new();
    let mut i = 0;
    let mut idx = 0;
    let mut res = String::new();

    while i < chars.len() {
        let char = chars[i];

        if candidate_set.contains(&char) {
            if candidate_str.len() > res.len() {
                res = candidate_str.clone();
            }

            candidate_str.clear();
            candidate_set.clear();
            idx += 1;
            i = idx;
        } else {
            candidate_str.push(char);
            candidate_set.push(char);

            if i == str.len() - 1 && candidate_str.len() > res.len() {
                res = candidate_str.clone();
            }

            i += 1;
        }
    }

    res
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_length_of_longest_substring() {
        assert_eq!(length_of_longest_substring("abcabcbb"), "abc");
        assert_eq!(length_of_longest_substring("bbbbb"), "b");
        assert_eq!(length_of_longest_substring("bbbbbe"), "be");
        assert_eq!(length_of_longest_substring("pwwkew"), "wke");
        assert_eq!(length_of_longest_substring("bebiboobootboo"), "ebi");
    }
}
