
function arrayFromRange(min,max){
    const brain=[];
    for(let i=min;i<max; i++)
    brain.push(i);
    return brain;
}
console.log(arrayFromRange(-20,1))


const grades=[1,2,3,4,5,6,7,8,9,2,2,2];

// function except(grades, excluded){
//     const chain=[];
//     for(let element of grades)
//     if(!excluded.includes(element))
//     chain.push(element)
//     return chain;
// }

// const blast=except(grades,[7]);

// console.log(blast)


function countOccurrences(grades, searchElemnt){
    let sum=[];
    for(let element of grades)
    if (element===searchElemnt )
    sum++;
    return sum;
}
const blast=countOccurrences(grades,3)
// const nunbers=countOccurrences(grades,2)
console.log(blast)
// function getMax(array){
//   if (array.length === 0 ) return undefined;

//   return array.reduce((a,b)=> (a<b)? a:b);
// }

// const max= getMax([10,4,5,6,7]);
// console.log(max)

