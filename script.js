// console.log('notes app');
showNotes()
///let and end to value//
//step-1
let addBtn = document.getElementById("addBtn")
addBtn.addEventListener("click", function (e) {

    //step 2
    let addText = document.getElementById("addText")
    

    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }

    //step 3
    notesobj.push(addText.value)
    localStorage.setItem("notes", JSON.stringify(notesobj))
    addText.value = ""
    // console.log(notesobj)
    showNotes()
}) 

//Function Show Notes//

function showNotes() {


    // first Step
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        
        notesobj = JSON.parse(notes)
    }
//second step
 let html=""
 notesobj.forEach(function (element, index){
    html+=

    `<div class="card my-2 mx-2"  style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Notes ${index +1} </h5>
        <p class="card-text"> ${element}</p>

        <button  class="btn btn-primary" id="${index}" onclick="deleteNotes(this.id)">Delete note</button>
      </div>
    </div>
    `

 });
let notesApp =document.getElementById("notes")
if (notesobj.length != 0) {
     notesApp.innerHTML = html
}
else {
    
    notesApp.innerHTML = `Nothing to Show`;
}

};


function deleteNotes(index) {
    
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []
    }
    else {
        notesobj = JSON.parse(notes)
    }

    notesobj.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(notesobj))

    showNotes()
    
}

// data end karne ke liye
// localStorage.clear()



