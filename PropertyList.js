function getPropInfo(obj) {
    return Object.getOwnPropertyNames(obj).toString();
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

console.log(getPropInfo(student))