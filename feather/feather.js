

const total=[1,2,3,4,5,6,6,6,44,4,4,44,];

// function move(total,index, offset){
//   const position= index + offset;
//   if(position >=total.length  || position <0)
//   {
//     console.error('a threat was detected.')
//     return;
//   }
//   const bla=[...total];
//   const element=bla.splice(index, 1)[0]
//   bla.splice(index + offset , 0 , element)
//   return bla;
// }

// const check=move(total,0,20)
// console.log(check)

// function except(total, excluded){
//   const yawn=[];
//   for (let element of total)
//   if (!excluded.includes(element))
//   yawn.push(element);
//   return yawn;
// }

// const thin= except(total, [1]);

// console.log(thin)

// showStars(5);

// function showStars(number){
//   for(let i=1; i<number; i++)
//   {
//   let strimble= ' ';
//   for(let j=0; j<i; j++)
//    strimble +='*';
//     console.log(strimble);
//   }
// }

// function sum(limit){
//   let sum=0;
  
//   for(let i=0; i<=limit; i++)
//    if(i%3===0 || i%5===0)
//      sum +=i;

//   return sum;
// }

 
// console.log(sum(10));


function countOccurence(total, searchElement){
  let glad=0;
  for (let element of total)
  if (element ===searchElement)
  glad ++;
  return glad;
}


const check=countOccurence(total, 6)
console.log(check)









