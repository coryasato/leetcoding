pub fn find_median_sorted_arrays(nums1: Vec<i32>, nums2: Vec<i32>) -> f32 {
    let total_len: usize = nums1.len() + nums2.len();
    let median_idx = total_len / 2;
    let mut sorted_vec: Vec<i32> = vec![];
    let mut i: usize = 0;
    let mut j: usize = 0;

    while i < total_len && j < total_len {
        if i >= nums1.len() {
            let slice = &nums2[j..nums2.len()];
            sorted_vec.extend_from_slice(slice);
            break;
        } else if j >= nums2.len() {
            let slice = &nums1[i..nums1.len()];
            sorted_vec.extend_from_slice(slice);
            break;
        }

        if nums1[i] < nums2[j] {
            sorted_vec.push(nums1[i]);
            i += 1;
        } else {
            sorted_vec.push(nums2[j]);
            j += 1;
        }
    }

    if total_len % 2 == 0 {
        let sum = (sorted_vec[median_idx - 1] + sorted_vec[median_idx]) as f32;
        sum / 2.0
    } else {
        sorted_vec[median_idx] as f32
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_find_median_sorted_arrays() {
        assert_eq!(find_median_sorted_arrays(vec![1, 3], vec![2]), 2.00000);
        assert_eq!(find_median_sorted_arrays(vec![1, 2], vec![3, 4]), 2.50000);
    }
}
