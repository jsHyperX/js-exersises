function howManyTimes(str,alpha) {
    cnt=0
    Array.from(str).forEach(function(item,idx){
        cnt+=(alpha==item)
    })
    return cnt
}

var str = 'dawdaxawefsad',ch = 'd';
console.log(howManyTimes(str,ch))
