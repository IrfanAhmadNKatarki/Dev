let arr = [];
function addNote(){
    const inputValue = document.querySelector('.js-note').value;
    if(inputValue===''){
        return;
    }
    arr.push(inputValue);
    const existingC = document.querySelector('p').innerHTML;

    document.querySelector('p').innerHTML = `<span>${inputValue}</span><button>Delete</button></br>${existingC}`;
    document.querySelector('.js-note').value="";
   
}