const $tipo = document.getElementById("tipo"),
    $plazo = document.getElementById("plazo"),
    $haberes = document.getElementById("haberes"),
    $base = document.getElementById("base"),
    $ausente = document.getElementById("ausente"),
    $cant_ausente = document.getElementById("cant-ausente"),
    $gratificacion = document.getElementById("gratificacion"),
    $valor_grat = document.getElementById("valor_grat"),
    $hhee = document.getElementById("hhee"),
    $valor_hhee = document.getElementById("valor-hhee"),
    $otrosa = document.getElementById("otrosa"),
    $otrosb = document.getElementById("otrosb"),
    $otrosc = document.getElementById("otrosc"),
    $colacion = document.getElementById("colacion"),
    $movilizacion = document.getElementById("movilizacion"),
    $asignacion = document.getElementById("asignacion")
    ;

const $afp = document.getElementById("afp"),
    $valor_afp = document.getElementById("valor-afp"),
    $fonasa = document.getElementById("fonasa"),
    $valor_fonasa = document.getElementById("valor-fonasa"),
    $seguro = dcument.getElementById("seguro"),
    $impuesto = document.getElementById("impuesto"),
    $apv = document.getElementById("apv"),
    $otros_dsctos_legales = document.getElementById("otros-dsctos-legales"),
    $otros_dsctos = document.getElementById("otros-dsctos")
    ;


function calcularLiquido(){

    const form = document.createElement('form');
    form.action ='';
    form.method = 'GET';
    
    const $per_gratificacion = 0.25;

    const $valorgrat = $base.value * $per_gratificacion;

    $valor_grat.innerHTML = $valorgrat.toString();

    alert("se ejecuto la funcion")

    
} 



