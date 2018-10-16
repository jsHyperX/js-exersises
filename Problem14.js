var myObj =[
    {'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
    {'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
    {'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
    {'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
    {'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
    {'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}
];

function isProgrammer(obj) {
    return (obj.occupation =='Programmer')
}

function getListOfProgrammars() {
    myObj.forEach(function(item,idx){
        if(isProgrammer(item)) console.log(item)
    })
}

function sortListOfPeoples(){
    myObj.sort(function(person1,person2){
        return person2.age-person1.age;
    })
    console.log(myObj)
}

function presentByOccupation() {

    function getOccupations() {
        var mp = new Map();
        myObj.forEach(function(obj){
            mp.set(obj.occupation,0);
        })
        return mp.keys();
    }

    occupations = getOccupations()

    res={}
    for(occ of occupations) {
        prop = occ.toString()
        Object.defineProperty(res,prop,{
            value: [],
            enumerable: true,
            writable : true
        })
        info=[]
        for(o of myObj) {
            if(o.occupation==occ) {
                var newObj = {
                    name : o.name,
                    age : o.age
                }
                console.log()
                // console.log(typeof res[prop])
                // res[prop].push(newObj)
            }
        }
        res.push(info)
    }
    console.log(res.getOwnProperty())
    return res
}

function getListOfNames() {
    res=[]
    myObj.map(function(x){
        res.push(x.name)
    })
    console.log(res)
}

console.log('list of programmers: ')
getListOfProgrammars()
console.log('sorted list of people: \n')
sortListOfPeoples()
// presentByOccupation()
console.log('list of names:\n')
getListOfNames()
