function findLargestOfThem(n1,n2,n3,n4,n5) {
    return n1>n2
                ?
                n1:n2>n3
                ?
                n2:n3>n4
                ?
                n3:n4>n5
                ?
                n4:n5
}

console.log(findLargestOfThem(23,45,134,5,13))