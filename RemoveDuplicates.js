function removeDuplicates(arr) {
    var mp = new Map();
    arr.forEach(function(item,idx){
        mp.set(item,0);
    });
    return mp.keys();
}

var arr = [1,2,4,2,6,3,2]
console.log(removeDuplicates(arr))