const array = ['Irfan','Apple','Google','Irfan'];
let count = 0;
const obj={};
for (let index = 0; index < array.length; index++) {
    if(obj[array[index]]){
        obj[array[index]]++;
    }else{
        obj[array[index]] = 1;
    }
}

const aa = function bb(){
    console.log(bb);
    
}
const obj2 ={
    fun(){
        console.log('salman');
        
    }
} 
obj2.fun();

aa();

array.forEach(param);
function param(){
    console.log('Irfan');
}



console.log(obj);

const add = function(){
    console.log(2+3);
}

function runTwice(callback){
 callback();
 callback();
}
runTwice(add);

function oneSec(){
    let text = document.querySelector('button');
    if(text.innerHTML === 'Start'){
        text.innerHTML = 'Finished';
    }else{
        text.innerHTML = 'Start';
    }
}

function displayMessage(number){
    let text = document.querySelector('.add-to-cart');
    console.log(text);
    text.innerHTML = 'Added';
    setTimeout(()=>{
        text.innerHTML = '';
    },number);
}
let messages = 0;
document.title='App';
function updateMessage(){
    messages++;
    document.title =`(${messages})New Message`;

}

function removeMessage(){
    if(messages>0){
        messages--;
    }
    if(messages===0){
        document.title =`App`;
    }else{
    document.title =`(${messages})New Message`;
    }
}

setInterval(()=>{
    if(messages===0){
document.title ===`App`
    }
    else if(document.title ===`App`){
        document.title = `(${messages})New Message`;
    }else{
        document.title = 'App';
    }
},1000);



console.log(
[-1,3,5].filter((value)=>value*2));
console.log([1,2,3].map((value, index)=>value * 2));


function addNum(arr,value){
     return arr.map((val)=>value+val);
}

console.log(addNum([1,2,3],4));
let cont = 0;
console.log(['apple','egg','egg','egg','apple','egg'].filter((value)=>{ 
    if(value!=='egg'){
        return true;
    }
   return ++count > 2;    
}));




