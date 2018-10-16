function flatten(obj) {
    return obj.toString();
}

var myObj = [5, [22], [[14]], [[4]],[5,6]]
console.log(flatten(myObj))