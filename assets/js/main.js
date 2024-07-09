    
    let base = document.getElementById("base"),
            grat = document.getElementById("gratificacion"),
            valor_grat = document.getElementById("valor_grat"),
            ausente = document.getElementById("ausente")

    
    
    
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

            console.log(gratificacion.value)
            if (gratificacion.value == 0){
                let valor_imm = 500.000
                let porcentaje_grat = 0.25
                let valor_por_imm = 4.75
                porcentaje_grat *= base.value
                valor_por_imm *= valor_imm / 12
    
                if(porcentaje_grat < valor_por_imm){
                    document.getElementById("valor_grat").value = porcentaje_grat
    
                }
                else
                {
                    document.getElementById("valor_grat").value = valor_por_imm
                }
    
                
    
                console.log(porcentaje_grat.toString())

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



