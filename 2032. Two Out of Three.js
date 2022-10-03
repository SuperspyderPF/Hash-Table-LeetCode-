/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3)  {
    //iterate through all arrays, check if they have values that present in the other, push it all in a set, and then return as array
    var sol = new Set()
    for(let i of nums1){
        if(nums2.includes(i)){
            sol.add(i)
        }
    }
    for(let c of nums2){
        if(nums3.includes(c)){
            sol.add(c)
        }
    }
    for(let j of nums3){
        if(nums1.includes(j)){
            sol.add(j)
        }
    }
    var arrrrr = Array.from(sol); 
    return arrrrr
};

//sol 2 
var twoOutOfThree = function(nums1, nums2, nums3) {
	/* Getting an array of all unique numbers from nums1, nums2, nums3 and Spreading them to concate all three arrays */
    let num = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
	/*An empty array to store result*/
    let arr = [];
	/* Using Lodash to count the frequency of all elements. It'll return an Object */
    let freq = _.countBy(num);
    
	/* Getting Keys of the object "freq". It'll return an array of all Keys of the key-value pairs */
    let keys = Object.keys(freq);
	
	/* Looping through the Keys and checking if the value of freq[key] is greater or equal 2. If it is, pushing the key into "arr" array */
    keys.forEach(key => {
        if(freq[key] >= 2){
            arr.push(key)
        }
    })
    return arr;
};