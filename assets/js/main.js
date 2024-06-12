const persona = {
    firstName: "coder",
    lastName: "house",
    userName: "coderhouse",
    userPass: "CoderHouse123"
}

// const notes = [
//         {
//             id: 1,
//             noteTitle: "To Do",
//             noteDesc: "Monthly reunion with Specialists teams about every checklist reviewed in the last three months",
//             noteDate: "12-jun-24"
//         },
//         {
//             id: 2,
//             noteTitle: "Supermarket List",
//             noteDesc: "Monthly reunion with Specialists teams about every checklist reviewed in the last three months",
//             noteDate: "12-jun-24"
//         },
//         {
//             id: 3,
//             noteTitle: "Other Notes",
//             noteDesc: "Monthly reunion with Specialists teams about every checklist reviewed in the last three months",
//             noteDate: "12-jun-24"
//         }
//     ];

const nota1 = new Notas("To Do", "Monthly reunion with Specialists teams about every checklist reviewed in the last three months","12-jun-24");

const nota2 = new Notas("Supermarket List", "Monthly reunion with Specialists teams about every checklist reviewed in the last three months","12-jan-24");

const nota3 = new Notas("Other Notes", "Monthly reunion with Specialists teams about every checklist reviewed in the last three months","12-dec-23");


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
        $noteTitle.innerHTML = nota1.noteTitle;
        $noteDate.innerHTML = nota1.noteDate;
        $noteDesc.innerHTML = nota1.noteDesc;

        document.getElementById('noteTitle1').innerHTML = nota2.noteTitle;
        document.getElementById('noteDate1').innerHTML = nota2.noteDate;
        document.getElementById('noteDesc1').innerHTML = nota2.noteDesc;

        document.getElementById('noteTitle2').innerHTML = nota3.noteTitle;
        document.getElementById('noteDate2').innerHTML = nota3.noteDate;
        document.getElementById('noteDesc2').innerHTML = nota3.noteDesc;
        

        // console.log(notes.noteTitle + notes.noteDesc + notes.noteDate)
    }

    function Notas(title, desc, date){
        this.noteTitle = title;
        this.noteDesc = desc;
        this.noteDate = date;

    }