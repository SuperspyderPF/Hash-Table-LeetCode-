/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const hash = {}
    arr.forEach(num => hash[num] = hash[num] + 1 || 1)
    return Object.values(hash).length === new Set(Object.values(hash)).size;
};