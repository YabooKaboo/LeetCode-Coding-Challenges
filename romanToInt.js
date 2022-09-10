/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let map={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
    let sum=0;
    for(let i=0;i<s.length-1;i++){
        map[s[i]]<map[s[i+1]]?sum-=map[s[i]]:sum+=map[s[i]];
    }
    return sum+map[s[s.length-1]];
};
