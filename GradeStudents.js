var marksList = [
                ["david",80],
                ["vinoth",75],
                ["divya",88],
                ["ishitha",95],
                ["thomas",68]
            ]

var marks = marksList.keys();
sum=0;
marks.array.forEach(function(item,idx) {
    sum+=item;
});
sum/=marks.length

