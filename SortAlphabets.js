function sortalpha(str) {
    return Array.from(str).sort(function(a,b){return a>b})
}

var str = 'webmaster'
console.log(sortalpha(str))
