    
    let base = document.getElementById("base"),
            grat = document.getElementById("gratificacion"),
            valor_grat = document.getElementById("valor_grat"),
            ausente = document.getElementById("ausente"),
            hhee = document.getElementById("hhee"),
            valor_hhee = document.getElementById("valorhhee"),
            afp = document.getElementById("afp"),
            valor_afp = document.getElementById("valor-afp")

    
    
    
    btnCalcular.addEventListener('click', () => {
        calcular();
    })

    base.addEventListener('onkeydown', () => {
        calcular();
    })

    ausente.onchange = function() {
        alert("esta wea cambio")
    }
    
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
                let sueldo_bruto = base += porcentaje_grat
                valor_por_imm *= valor_imm / 12

                let valor_horas, valor_hhee, valor_total_hhee = 0;

                if (document.getElementById("hhee").value !== ""){
                    valor_horas = base.value / 30;
                    valor_hhee = valor_horas * 28;
                    valor_hhee = valor_hhee / 180;
                    valor_total_hhee = valor_hhee * hhee.value;
                    valorhhee.value = valor_total_hhee;
                    console.log(valor_horas, valor_hhee, valor_total_hhee)
                }
    
                if(porcentaje_grat < valor_por_imm){
                    document.getElementById("valor_grat").value = porcentaje_grat
    
                }
                else
                {
                    document.getElementById("valor_grat").value = valor_por_imm
                }
    
                if(afp.value !== 0){


                    let comm_afp, porcentaje_afp = 0

                    switch(afp.value){
                        case 1:
                            comm_afp = sueldo_bruto * 0.10
                            comm_afp += 0.144
                            

                            break;  

                        case 2:
                        break;

                        case 3:
                            break;

                        case 4:
                            break;

                        case 5:
                            break;

                        case 6:
                            break;

                        case 7:
                            break;

                        case 8:
                            break;

                        default:
                            break;
                        }    
                        console.log(comm_afp)
                }
                                                    
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



