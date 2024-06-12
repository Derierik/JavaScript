const $submit = document.getElementById("submit"),
    $password = document.getElementById("userPass"),
    $username = document.getElementById("userName"),
    $visible = document.getElementById("visible");

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
                verificarUsuario($username.value, $password.value)
                // window.location.href = "home.html";
            }
            else
            {
            }
        }
    })

    const persona = {
        firstName: "Kevin",
        lastName: "Soto",
        userName: "matidev.js",
        userPass: "CoderHouse123"
    }

    // console.log(persona.userName + ' ' + persona.userPass)
    function verificarUsuario(nombre, pass){
        if (nombre === persona.userName && pass === persona.userPass){
            window.location.href = "./templates/home.html";
        }
        else
        {
            alert("Las credenciales de acceso no son correctas.")
        }
    }