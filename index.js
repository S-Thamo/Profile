// var fruits = ["Mango",["DragonFruit","Kiwi"],"Banana","Orange","Pineapple","Jackfurit"];

// let [m,[d,k],b,o,p,j] = fruits;
// console.log(d);

// for(var z=1; z<=30; z++) {
//     if(z%2==0) {
//         if(z.toString().slice(-1)!=6) {
//             console.log(z);
//         }
//     }  

var fruits = {
 fr1:"Mango",
 fr2:"Banana",
 fr3:"Orange",
 fr4:"Pineapple",
 fr5:"Jackfurit"
};

let {fr1,fr2,fr3,fr4,fr5} = fruits;

console.log(fr1);
