/**
697. Degree of an Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

 

Example 1:

Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
Example 2:

Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
 

Constraints:

nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/
class Solution {
    public int findShortestSubArray(int[] nums) {
        int len = 0; 
        for (int num : nums) {
            len = Math.max(len, num);
        }
        int max = nums[0];
        int maxTimes = 1;
        int[] firstIndex = new int[len + 1];
        int[] lastIndex = new int[len + 1];
        int[] count = new int[len + 1];


        for(int i = 0; i < nums.length; i++){
            int key = nums[i];
            if(count[key] == 0)
                firstIndex[key] = i;
            lastIndex[key] = i;
            count[key]++;
            if(count[key] > maxTimes){
                maxTimes = count[key];
                max = key;
            }
            if(count[key] == maxTimes & lastIndex[key] - firstIndex[key] < lastIndex[max] - firstIndex[max])
                max = key;
        }
        return lastIndex[max] - firstIndex[max] + 1;
    }
}

function findShortestSubArray2(nums: number[]): number {
    let len: number = 0;
    for(let num of nums){
        len = Math.max(len, num);
    }

    let max: number = nums[0];
    let maxTimes: number = 1;
    let firstIndex = new Array<number>(len + 1);
    let lastIndex = new Array<number>(len + 1);
    let count = new Array<number>(len + 1);

    for(let i: number = 0; i < nums.length; i++){
        let key: number = nums[i];
            if(count[key] == undefined){
                firstIndex[key] = i;
                count[key] = 0;
            }
                
            lastIndex[key] = i;
            count[key]++;
            if(count[key] > maxTimes){
                maxTimes = count[key];
                max = key;
            }
            if(count[key] == maxTimes && lastIndex[key] - firstIndex[key] < lastIndex[max] - firstIndex[max])
                max = key;
        }
        return lastIndex[max] - firstIndex[max] + 1;
};