const btnSubmit = document.getElementById("submit")

const userinput = document.getElementById("userName"),
    passinput = document.getElementById("userPass")

const users = {
    user: "coderhouse",
    pass: "CoderHouse123"
}

const url = "./templates/home.html"

    btnSubmit.addEventListener('click', function(){
        login()
    })

    document.getElementById("login-form").addEventListener('click', function(){
        event.preventDefault();
    })

function login(){

    if(userinput.value !== users.user){
        mensajeAlerta(0)
    }
    else
    {
        if(passinput.value !== users.pass){
            
            mensajeAlerta(1)
        }
        else
        {
            localStorage.setItem('userName', users.user)
            window.location.href = "./templates/home.html";
        }
    }
}

function mensajeAlerta(mensaje){

    switch (mensaje)
        {
            case 0:
                Toastify({
                    text: "El usuario no existe",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #ED213A, #93291E)",
                    }// Callback after click
                }).showToast();
                break;
            
            case 1:
                Toastify({
                    text: "Las credenciales son incorrectas",
                    duration: 3000,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "center", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                        background: "linear-gradient(to right, #ED213A, #93291E)",
                    }// Callback after click
                }).showToast();
                break;
        }

}