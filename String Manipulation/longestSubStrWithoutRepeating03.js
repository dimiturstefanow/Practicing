

function longestSubStr(str) {
  // sliding window approach
  if (!str) {
    return 0;
  }

  let end = 0;
  let start = 0;
  let maxlength = 0;

  const uniqueChar = new Set();

  while (end < str.length) {
    if (!uniqueChar.has(str[end])) {
      uniqueChar.add(str[end]);
      end++;
      maxlength = Math.max(maxlength, uniqueChar.size);
    } else {
      uniqueChar.delete(str[start]);
      start++;

    }
  }
  return maxlength;
}

console.log(longestSubStr("abcabcbb"));
