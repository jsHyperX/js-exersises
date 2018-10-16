function json2obj(json) {
    var obj = JSON.parse(json)
    list = Object.getOwnPropertyNames(obj)
    list.forEach(function(item) {
        console.log(obj[item])
    });
}

json2obj('{"mike":"Book","jason":"sweater","chels":"iPad"}')