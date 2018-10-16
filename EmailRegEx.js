function validateEmail(str) {
    var patt = /^[A-Za-z0-9(!|#|$|%|&|'|*|+|-|/|=|?|^|_|`|{|}|~)][@][gmail|yahoo][.][com]/
    console.log(patt.test(str))
}

validateEmail('vikramsaurabh14gmail.com')