console.log("hello")

function create() {
    let out = document.getElementById("output");
    let idss = 0;

    let x = document.getElementById("texts").value;

    if (x != "") {
        let box = document.createElement("div");
        box.innerHTML = x;
        box.className = "note"
        box.id = idss;
        out.appendChild(box);
        let dlbtn = document.createElement('button');
        dlbtn.innerHTML = "DELETE";
        dlbtn.className = "dlbtn";
        dlbtn.addEventListener('click',function del(idss) {

            box.remove();
            dlbtn.remove();
       
       }
       )
        dlbtn.id = idss
        out.append(dlbtn);
        idss = idss + 1;
    }
   else{
       alert("note cannot be blank")
   }

}


