const fruits = ["Banana", "Orange", "Apple", "Mango"];

const chan=fruits.toString();
console.log(typeof(fruits));
console.log(chan);
console.log(fruits);
console.log(typeof(chan));
//console.log(fruits.pop()) 
fruits.pop()    //remove last index of an array
fruits.shift(); //remove 1st index of an array 
fruits.push("strawberry") //add value in last index of an array
fruits.unshift("Fig");      //add value in 1st index of an array
console.log(fruits);
delete fruits.shift();
console.log(fruits);


//////
var b=[20,19,18,17,16,10,9,8,2,7,1,4];
function vim(a, b) {
    if(a<b)
    return 1;
    if(a>b)
    return -1;

    return 0;
  }
   // console.log(+b[1]<+b[2])

console.log(b.sort(vim))

/** math method  */
var v=[32,12,12.1,56,20,200,100];
for(var i=0;i<v.length;i++)
{
    var a=Math.min(v[i],v[i+1]);
}
console.log(a+"<-");
console.log(Math.max(12,32,32.1,98,200,2,20,1000));