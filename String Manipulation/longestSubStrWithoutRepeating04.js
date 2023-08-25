function lengthOfLongestSubstring(s) {
  let start = 0;
  let maxLength = 0;
  const charIndexMap = {}; // Use an object to map characters to their last seen index.

  for (let end = 0; end < s.length; end++) {
      const char = s[end];

      if (charIndexMap[char] !== undefined && charIndexMap[char] >= start) {
          start = charIndexMap[char] + 1;
      }

      maxLength = Math.max(maxLength, end - start + 1);
      charIndexMap[char] = end;
  }

  return maxLength;
}

const inputString = "abcabcbb";
console.log(lengthOfLongestSubstring(inputString)); // Output: 3 ("abc")
