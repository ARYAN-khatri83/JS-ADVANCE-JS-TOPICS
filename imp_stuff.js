// CALL BACK FUNC
// jab bhi koi aisa code jo baad me chalta hai app likhoge,kyuki wo code baad mein chlta hai js ko ye pata nhi hota ke wo complete hua ya nhi , aise code ke completion par js ko bataya jata hai k wo 
// complete hogya aur aap use chala skte ho, ye batana ka kaam callback ka h.
setTimeout(function(){
    console.log("2 sec k badd chlega ye");
},2000);

// FIRST CLASS VALUES
// js mein ek concept hai jiska matlab hota hai ki app fun ko use kr skte ho as a value

function abcd(a){
    a();
}
abcd(function(){console.log("hello");})

// Array.isArray to check if it is an array or not

// tTO DELETE A OBJ IN GROUP
var a= {
    name:"aryan",
    age:12
}
delete a.age;
 
// HIGHER ORDER FUNC
// Higher order function are the functions which accept a function in a parameter or return a function or both
// imp: for ex- forEach method always takes another functio inside it,so forEach is a higher order function
var arr = [1,2,3,4];

arr.forEach(function(){})

function abcd(){

}
abcd(function(){})
// aisa fun jo accept krle ek aur fun ya fir wo return krde ek or fun

// CONSTRUCTOR OF A FRAME
// we use this fun when hamare pass same property valle bhot sarre elements banane ho , there we use this function.
function saanchaOfBiscuit(){
    this.height = 12;
    this.width = 14;
    this.flavour = "sugary"   // here this acts as a window for us and we can ask anything that we require from the window using this

}
new saanchaOfBiscuit() // and to call the fun add new in front of the func

// normal fun jisme this ka use ho and at the time of calling the fun we can use a new keyword

// one more ex of this fun

function circularButtonBanaoo(color){  // here we can define like this jiske liae we want different values
    this.radius=2;
    this.color=color;
    this.icon=false;
    this.pressable=true;
}
var redBtn = new circularButtonBanaoo("red");
var GreenBtn = new circularButtonBanaoo("Green");

// WHAT IS FIRST CLASS FUNCTION
// a language is said to have first class functions when the functions in that language are treated as variables, you can save them, you can pass them as arguments to another functions

// NEW KEYWORD
// jab bhi new lgta hai hamesa ek blank object apne mann mei bna lo and put it in place of this

//IIFE
// immediately invoked or called function expression
// iife hai function ko turant chalne ki kla, is tarreke se ki hum log koi private varibale bna paeee

(function(){
    var privateval =12; // this cant be accessed

    return {
        getter:function(){
            console.log(privateval);
        },
        setter: function(val){
            privatevale= val;
        }
    }
})()

// PROTOTYPE
// whenever we create a object it gets a property called prototype which means whenever we create an object it gets prototype property automatically

//PROTOTYPAL INHERITANCE

var human = {
    canFly:false,
    canTalk: true,
    canwalk:true,
    haveEmotions:true,
    hasFourLegs: false
}

var ekStudent={
    canSwim:true,
    canTalk:true
}

ekStudent.__proto__ = human // this is the way to inherit

// THIS CALL APPLY BIND
//global scope -  jab bhi koi chij {} brackets k andr nhi hoti we say it global scope otherwise it is a local scopre
console.log(this); // in this value would be window 

// ek fun jo obj k andr ho , usey method kehte h
var obj={
    backkro: function(){}
}
// global=> window
// function => window
// method => object
var button = document.querySelector("button")
button.addEventListener("Click",function(){
    this.style = 'red';   // DOM MANIPULATION
})

function abcd(){
    console.log(this.age);
}
var objects = {age:24}

abcd.call(objects) // isme we are make this as objects and it would print 24

// call by BIND
function abcd(){
    console.log(this);
}
var obj = {age:24}

var bindfnc = abcd.bind(obj); // ye bind kr dega obj ko hamare func k sath
bindfnc();

// PURE FUNCTION = 1) it should always return the same output for same input
// 2) it will never change / update the value of a global variable


//ASYNCHRONUS JS AND SYNCHRONUS
// sync mtlb ek k badd sura hoga jba tak ek command complete na hotab tak dusra start nhi hoga
// asyn mtlb sarre kam ek sath start krdo and jiska answ sabse pehle aa jaye uska jawwab dedo

// if u r using setTimeou, setInterval , Pormises ,fetch ,axios , XMLHttprequest then it is asyn otherwise if u dont see these then it is syn

// asyn code ma motive hota hai ki un cases mein jinmein hum pta nhi code ka ans kitni time m aega and jab bhi ans aega uske respect mkoi partticulaar code chla dena

console.log("hey"); 
setTimeout(function(){
    console.log("hey2")
},2000)

// js is not async
// event loop - main stack asks side stack if there is something to take or not 
console.log("hey"); // syn 
console.log("hey2"); // syn
setTimeout(function(){ // asyn
    console.log("hey 3");
},0);
console.log("hey 4"); // syn
// toh while printing idhr 1 , 2 , 4 and 3 print hoga bcoz pehle main stack m sarre syn valle jatte h and execute hote and then after completion of main stack it goes to side stack and check 
// if there is any func that is ayn and if it is here it ask whether it is completed or not and if it is completed it takes it to the main stack and stack ko empty kra gya. 

// WHAT IS A CALLBACK?  callback is a fucntion and it works only after the completion of asyn code

//PROMISES-
var ans = new Promise((res,rej)=>{
    if(true){
        return res();
    }
    else{
        return rej();
    }
})
ans
    .then(function(){
    console.log("resolve hogya tha")
    })
    .catch(function(){
    console.log("rejettc hua tha !")
    })
// example for promise
var ans  = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);
    if (n>5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    comsole.log("below");
})
    .catch(function(){
        console.log("above");
    })

// EXAMPLE OF PROMISE

let promise = new Promise(function(resolve, reject) {
        alert("Hello")
        resolve(56)
})

console.log("Hello One")
setTimeout(function() {
        console.log("Hello Two in 2 seconds")
}, 2000)

console.log("My name is " + "Hello Three")
console.log(promise)



// Fetch google.com homepage  ==> console.log("google.com homepage done")
// Fetch data from the data api 
// Fetch pictures from the server 
// Print downloading 
// Rest of the script     



let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am resolved")
            resolve(true)
    }, 5000)
})

let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending")
    setTimeout(() => {
            // console.log("I am a promise and I am rejected")
            reject(new Error("I am an error"))
    }, 5000)
})

// To get the value
p1.then((value) => {
    console.log(value)
})

// To catch the errors
// p2.catch((error) => {
//         console.log("some error occurred in p2")
// })

p2.then((value)=>{
    console.log(value) 
},(error)=>{
    console.log(error)
})





// asyn wait()- koi bhi esa fun jisme app asyn code likhenge , kyoki async code hai to app promises ka istemall kr skte hai, jab uska ans aayega apkpo then lagana pdega, us then ko lagana se 
// bachne k liaee, aap async await ka use kr skte hai

async function abcd(){
    await fetch('')
}

// hoising-  varibales and functions are hoisted which means their declaration is moved on the top of code
console.log(a);
var a= 12; // primivite
var b = [1,2,34] //reference

// types in js - primitives and reference
// reference = =(),{},[]
//  aisi koi bhi value jisko copy krne pr real copy nhi hota , bilkul us main value ka reference pass ho jata hai,use hum refrence value khete hai, aur jiske copy krne par real copy ho jaee vo
// value primitive type value hoti hai


// ASYNC EXAMPLE


async function harry() {
    let delhiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let bangaloreWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    console.log("Fetching Delhi Weather Please wait ...")
    let delhiW = await delhiWeather
    console.log("Fetched Delhi Weather: " + delhiW)
    console.log("Fetching Bangalore Weather Please wait ...")
    let bangaloreW = await bangaloreWeather
    console.log("Fetched Bangalore Weather: " + bangaloreW)
    return [delhiW, bangaloreW]
}

const cherry = async () => {
    console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()

// ERROR HANDLING TRY AND CATCH
setTimeout(()=>{
    console.log("Hacking wifi.... Please wait..." ) 
    }, 1000)
    
    try{
            setTimeout(()=>{ 
                    console.log(rahul)  
            }, 100)
    }
    catch(err){
            console.log("Balle balle")
    }
    
    
    setTimeout(()=>{ 
            console.log("Fetching username and password.... Please wait..." )
    }, 2000) 
    
    setTimeout(()=>{ 
    console.log("Hacking Rahul's facebook id.... Please wait..." )
    }, 3000) 
    
    setTimeout(()=>{ 
    console.log("Username and password of Rahul (+919356700001) fetched.... Please wait..." )
    }, 4000) 


// ARROW FUNCTIONS

const sayHello = name => {
    console.log("greeting" + " " + name)
    console.log("hi")
  }
  
  const x = {
    name: "Harry",
    role: "Js Developer",
    exp: 30,
    show: function() {
      // let that = this
      // console.log(this)
      setTimeout(() => {
        console.log(`The name is ${this.name}\nThe role is ${this.role}`)
      }, 2000)
    }
  }
  sayHello("Harry", "Good Afternoon")
  // console.log(x.name, x.exp)
  // x.show()