const arr = [ "Apa", "Bada", "Cykel i floden"]

const index =1 

const move =arr.splice(index - 1, 1)
arr.splice(index , 0, move[0])

//arr.splice(index - 2, 0, move[0])

console.log(arr.indexOf("cykel i floden"));

//console.log(arr);

