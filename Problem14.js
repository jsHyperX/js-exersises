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
    list=[]
    res = {}
    for(occ of occupations) {
        prop = occ.toString()
        info = []
        for(o of myObj) {
            if(o.occupation==occ) {
                var newObj = {
                    name : o.name,
                    age : o.age
                }
                info.push(newObj)
            }
        }
        list.push(info)
        // Object.defineProperty(res,prop,{
        //     value:[]
        // })
    }

    console.log({
        'Team Leader': list[0],
        'Programmer': list[1]
    })
    // console.log(res)
}

function getListOfNames() {
    res=[]
    myObj.map(function(x){
        res.push(x.name)
    })
    console.log(res)
}

console.log('list of programmers:\n ')
getListOfProgrammars()
console.log('\nsorted list of people: \n')
sortListOfPeoples()
console.log('\npresented by ...:\n')
presentByOccupation()
console.log('\nlist of names:\n')
getListOfNames()
