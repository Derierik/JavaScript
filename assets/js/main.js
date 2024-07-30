    
    let base = document.getElementById("base"),
            grat = document.getElementById("gratificacion"),
            valor_grat = document.getElementById("valor_grat"),
            ausente = document.getElementById("ausente"),
            hhee = document.getElementById("hhee"),
            valorhhee = document.getElementById("valorhhee"),
            afp = document.getElementById("afp"),
            valor_afp = document.getElementById("valorafp"),
            fonasa = document.getElementById("fonasa"),
            valor_fonasa = document.getElementById("valorfonasa")

    let form = document.querySelector("form"),
        btnSubmit = document.getElementById("submit")
    
    form.addEventListener('submit', function(event){
        event.preventDefault();
        LogIn();
    })
    
    btnCalcular.addEventListener('click', () => {
        calcular();
    })

    btnSubmit.addEventListener('click', () =>{
        
    })

    base.addEventListener('onkeydown', () => {
        calcular();
    })

    ausente.onchange = function() {
        alert("esta wea cambio")
    }

    fonasa.onchange = function() {

        if(fonasa.value == 0){
            valor_fonasa.value = ""
            valor_fonasa.disabled = true;
        }
        else
        {
            valor_fonasa.disabled = false;
        }

    }

    const users = {
        user : "coderhouse",
        pass : "CoderHouse123"

    }
    
    console.log(users.user)
    // calcular.addEventListener('click', ()=>{
        //     calcular();
        // })
        
    function calcular(){

        if(base.value !== ""){

            if (gratificacion.value == 0){
                let valor_imm = 500.000
                let porcentaje_grat = 0.25
                let valor_por_imm = 4.75
                porcentaje_grat *= base.value
                valor_por_imm *= valor_imm / 12

                let valor_horas, valor_hhee, valor_total_hhee = 0;

                if (document.getElementById("hhee").value !== ""){
                    valor_horas = base.value / 30;
                    valor_hhee = valor_horas * 28;
                    valor_hhee = valor_hhee / 176;
                    valor_hhee *= 1.5;
                    valor_total_hhee = valor_hhee * hhee.value;
                    valorhhee.value = valor_total_hhee.toFixed(0);
                }
    
                if(porcentaje_grat < valor_por_imm){
                    document.getElementById("valor_grat").value = porcentaje_grat.toFixed(3)
    
                }
                else
                {
                    document.getElementById("valor_grat").value = valor_por_imm.toFixed(3)
                }
    
                if(afp.value !== 0){

                    console.log(afp.value)

                    let comm_afp = 0;

                    switch(afp.value){
                        case 1: //  C A P I T A L
                            comm_afp = 0.0144
                            
                            break;  
                        case 2: //  C U P R U M
                            comm_afp = 0.0144
                            break;
                        case 3: //  H A B I T A T
                            comm_afp = 0.0127
                            break;
                        case 4: //  M O D E L O
                            comm_afp = 0.0058
                            break;
                        case 5: // P L A N V I T A L
                            comm_afp = 0.0116
                            break;
                        case 6: // P R O V I D A
                            comm_afp = 0.0145
                            break;
                        case 7: // U N O 
                            comm_afp = 0.0049
                            break;
                        case 8: // P R I M E R  T R A B A J O
                            break;
                        default:    // N O  C O T I Z A
                            break;
                        }    

                        // comm_afp = comm_afp + 0.1;

                        valor_afp.value = comm_afp.toFixed(4);
                        console.log(comm_afp)
                }
            }
            else
            {
                valor_grat.value = ""
            }

            if(fonasa.value == 0){

                let sueldo_bruto = base.value;
                let gratificacion_valor = valor_grat.value;

                sueldo_bruto += gratificacion_valor

                console.log(sueldo_bruto)
            }

        }
        else
        {
            alert('Debe ingresar un valor en -Sueldo Base-')
        }
        // alert('se ejecuto esta wea')
    }

    function LogIn(users){
        const userinput = document.getElementById("userName"),
                passinput = document.getElementById("userPass")

        console.log(userinput.value)

        if(userinput.value !== users.user){
            alert("No existe este usuario.")
        }
        else{
            if(passinput !== users.pass){
                alert("Contraseña incorrecta")
            }
            else
            {
                Response.redirect("/templates/home.html")
            }
        }
    }





