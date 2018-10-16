function ascend(str1,str2) {
    return str1>str2
}

function descend(str1,str2) {
    return str1<str2
}

var arr = ['humpty','dumpty','sat','on','the','wall']
n = prompt('enter your choice')
if(n) arr.sort(ascend)
else arr.sort(descend)
console.log(arr)