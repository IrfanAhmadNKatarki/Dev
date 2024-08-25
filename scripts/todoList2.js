const list = [];
function addNote(){
    const name = document.querySelector('.js-note').value;
    const dueDate = document.querySelector('.js-note-date').value;

    if(name===''){
        return;
    }
    list.push({name,
        dueDate,
    currentTime:new Date().toLocaleTimeString()
    });
    document.querySelector('.js-note').value="";
    console.log(list);
    
    renderToList();
}

function renderToList(){
    let generatedHTML='';
 list.forEach((value,index)=>{
    generatedHTML += `
        <p>${value.name}</p>
        <p>${value.dueDate}</p>
       <p> <button class='delete-button' onclick='deleteNote(${index})'>Delete</button></p>
`});
     
    const divContainer = document.querySelector('.newELes');
    divContainer.innerHTML = generatedHTML;
    console.log(generatedHTML);

 }

function deleteNote(index){
   list.splice(index,1);
   renderToList(); 
   console.log(list);
     
}

document.querySelector('.add-event').addEventListener('click',()=>{
    addNote();
});

document.querySelectorAll('.delete-button').forEach((deleteButton,i)=>{
    deleteButton.addEventListener('click',()=>{
        deleteNote(i);
    });
});