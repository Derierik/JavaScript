const persona = {
    firstName: "coder",
    lastName: "house",
    userName: "coderhouse",
    userPass: "CoderHouse123"
}

const notes = {
    noteTitle: "To Do",
    noteDesc: "Monthly reunion with Specialists teams about every checklist reviewed in the last three months",
    noteDate: "12-jun-24"
}


const $submit = document.getElementById("submit"),
    $password = document.getElementById("userPass"),
    $username = document.getElementById("userName"),
    $visible = document.getElementById("visible");

const $greetings = document.getElementById("greetings"),
    $noteTitle = document.getElementById("noteTitle"),
    $noteDesc = document.getElementById("noteDesc"),
    $noteDate = document.getElementById("noteDate");

    document.addEventListener("change", (e) =>{
        if(e.target === $visible){
            if($visible.checked === false){
                $password.type = "password";
            }
            else
            {
                $password.type = "text"
            }
        }
    })

    document.addEventListener("click", (e) =>{
        if(e.target === $submit){
            if($password.value !== "" && $username.value !== ""){
                e.preventDefault();
                verificarUsuario($username.value, $password.value);
                // window.location.href = "home.html";
            }
            else
            {
            }
        }
    })

    document.addEventListener("load", (e)=>{
        if(e.target === $home){

        }
    })


    // console.log(models.persona.userName + ' ' + models.persona.userPass)
    function verificarUsuario(nombre, pass){
        if (nombre === persona.userName && pass === persona.userPass){
            window.location.href = "./templates/home.html";
        }
        else
        {
            alert("Las credenciales de acceso no son correctas.");
        }
    }

    function viewNotes(){
        $greetings.innerHTML = "Bienvenido! " + persona.firstName + ' '+ persona.lastName;
        $noteTitle.innerHTML = notes.noteTitle;
        $noteDate.innerHTML = notes.noteDate;
        $noteDesc.innerHTML = notes.noteDesc;

        // console.log(notes.noteTitle + notes.noteDesc + notes.noteDate)
    }