// ///step1//
// let addbtn = document.getElementById("addbtn");
// addbtn.addEventListener("click", function (e) {

// //step2//
// let addtext = document.getElementById("addtext")

// let notes= localStorage.getItem("notes")
// if (notes == null){
//     notesobject = []
// }
// else{
//     notesobject =JSON.parse(notes)
// }

// ///step3//

// notesobject.push(addtext.value)
// localStorage.setItem("notes" , JSON.stringify(notesobject))
// addtext.value = ""
// console.log(notesobject);
// })



//---------------------Function Show Notes-----------------//

// function showNotes() {


//     // first Step
//     let notes = localStorage.getItem("notes")
//     if (notes == null) {
//         notesobj = []
//     }
//     else {
        
//         notesobj = JSON.parse(notes)
//     }


// //2nd Step
// let html = ""
// notesobj.forEach(function (element, index) {

//     html += `
//     <div class="card my-2 mx-2" style="width: 18rem;">
//     <div class="card-body">
//         <h5 class="card-title">Notes ${index +1}</h5>
//         <p class="card-text"> ${element }</p>
//         <button id="${index}" onclick="deleteNotes(this.id)"  class="btn btn-primary">Delete</button>
//     </div>
//     </div>  `

// });

// //Step 3rd

// let notesElm = document.getElementById("notes")
//     if(notesobj.length != 0){
//         notesElm.innerHTML = html
//     }
//     else {
//         notesElm.innerHTML = `Nothing to show! Use Add Notes to Above section Keep Notes App`
//     }
// }
// //---------------------Function Show Notes-----------------//