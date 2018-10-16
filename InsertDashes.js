function insertDashes(num) {
    str = num.toString()
    res=[str[0]]
    for(i=1;i<str.length;i++) {
        if(str[i]%2==0 && str[i-1]%2==0) res.push('-')
        res.push(str[i])
    }
    console.log(res)
}

var num = prompt('please enter a number')
insertDashes(num)