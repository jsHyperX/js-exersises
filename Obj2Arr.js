var obj = {
    "One":"1",
    "Two":"2",
    "Three":"3",
    "Four":"4"
}

function convert() {
    res=[]
    for(key in obj){
        res.push(obj[key])
    }
    console.log(res)
}

convert()



