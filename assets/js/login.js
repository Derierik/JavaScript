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
                    alert(userinput)
                    console.log("Este usuario no existe.")
                    alert("Este usuario no existe.")
                }
                else
                {
                    if(passinput.value !== users.pass){
                        console.log("Credenciales incorrectas.")
                        alert("Credenciales incorrectas.")
                    }
                    else
                    {
                        console.log("log in exitoso")
                        localStorage.setItem('userName', users.user)
                        window.location.href = "./templates/home.html";
                    }
                }
            }