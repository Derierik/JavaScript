    
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

    const haberes_totales = document.getElementById("haberes_totales"),
        descuentos_totales = document.getElementById("descuentos_totales"),
        sueldo_liquido = document.getElementById("sueldo_liquido"),
        cant_ausente = document.getElementById("div_cant_ausente"),
        btnCalcular = document.getElementById("btnCalcular");

        
    
    btnCalcular.addEventListener('click', () => {
        calcular();
    })

    base.addEventListener('onkeydown', () => {
        calcular();
    })

    ausente.onchange = function() {
        console.log(ausente.value)
        if(ausente.value == 1 || ausente.value == 2 || ausente.value == 3)
        {
            cant_ausente.style.display = ''
        }
        else
        {
            cant_ausente.style.display = 'none'
        }
    }

    fonasa.onchange = function() {

        // se aplica el evento 'onchange' ya que es necesario habilitar el campo valor_fonasa para cuando el usuario seleccione la opcion "Isapre", ya que se necesita ingresar el valor del cobro por UF (Unidad de Fomento, Chile)


        if(fonasa.value == 0){
            valor_fonasa.value = ""
            valor_fonasa.disabled = true;
        }
        else
        {
            valor_fonasa.disabled = false;
        }

    }

    function sessionContents()
    {
        const greetings = document.getElementById("greetings")
        let message = "Bienvenido, " + localStorage.getItem('userName') + "!";
        greetings.innerHTML = message;

        cant_ausente.style.display = 'none'

    }
        
    function calcular(){
        let sueldobruto, descuentos, sueldoliquido;
        
        if(base.value !== ""){
            
            if (gratificacion.value == 0){

                //Se inicializan variables con valor de ingreso minimo mensual y porcentaje del 25% del sueldo base

                let valor_imm = 500000
                let porcentaje_grat = 0.25

                //calcular gratificacion por el ingreso minimo mensual

                let valor_por_imm = 4.75
                porcentaje_grat *= base.value
                valor_por_imm *= valor_imm / 12

                // Se agregara el valor de gratificacion que sea menor, en caso de que el sueldo base sea de 1,000,000 CLP el valor de gratificacion del 25% sera de 250
                // El valor de la gratificacion calculado con el ingreso minimo mensual sera de 197,167 CLP aprox. esto quiere decir que se sumara como gratificacion este valor, ya que es menor que 250,000 CLP



                //Calculo de valor de Horas Extra



                let valor_horas, valor_hhee, valor_total_hhee = 0;

                if (document.getElementById("hhee").value !== ""){


                    // Calculo de valor de horas extras
                    // Se divide el sueldo bruto por la cantidad de dias en el mes o dias trabajados (30)
                    //luego se multiplica por 28 y se divide por 176
                    //al resultado se le multiplica por 1,5 que es el valor agregado de las horas extras



                    valor_horas = base.value / 30;
                    valor_hhee = valor_horas * 28;
                    valor_hhee = valor_hhee / 176;
                    valor_hhee *= 1.5;
                    valor_total_hhee = valor_hhee * hhee.value;
                    valorhhee.value = valor_total_hhee.toFixed(0);
                }
    
                if(porcentaje_grat < valor_por_imm){
                    document.getElementById("valor_grat").value = parseInt(porcentaje_grat)
    
                }
                else
                {
                    document.getElementById("valor_grat").value = parseInt(valor_por_imm)
                    sueldobruto = parseInt(base.value)+parseInt(valor_por_imm)
                    

                    //Calculo descuentos legales (AFP y Fonasa)
                    //Descuento para AFP : porcentaje de interes mas el 10% del sueldo bruto
                    //Descuento Para Fonasa : Porcentaje del 7% del sueldo bruto
                    if(afp.value !== 0){

                        console.log(afp.value)
    
                        var comm_afp = 0;
    
                        switch(afp.value){
                            case "1": //  C A P I T A L
                                console.log("Capital")
                                comm_afp = 0.0144
                                
                                break;  
                            case "2": //  C U P R U M
                                console.log("Cuprum")
                                comm_afp = 0.0144
                                break;
                            case "3": //  H A B I T A T
                                console.log("Habitat")  
                                comm_afp = 0.0127
                                break;
                            case "4": //  M O D E L O
                                console.log("Modelo")
                                comm_afp = 0.0058
                                break;
                            case "5": // P L A N V I T A L
                            console.log("Planvital")
                                comm_afp = 0.0116
                                break;
                            case "6": // P R O V I D A
                            console.log("Provida")
                                comm_afp = 0.0145
                                break;
                            case "7": // U N O 
                            console.log("Uno")
                                comm_afp = 0.0049
                                break;
                            case "8": // P R I M E R  T R A B A J O
                                break;
                            default:    // N O  C O T I Z A
                                break;
                        }
                        
                        valor_afp.value = sueldobruto * comm_afp;
                        
                    }
                }
                console.log(sueldobruto)
                haberes_totales.value = parseInt(base.value) + parseInt(valor_por_imm);
                descuentos_totales.value = descuentos;
                sueldo_liquido.value = sueldoliquido;
            }
            else
            {
                valor_grat.value = ""
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





