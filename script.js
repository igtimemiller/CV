setTimeout(function(){ document.getElementById("textobini2").innerHTML = "Acceso concedido!" }, 1300);
setTimeout(function(){ document.getElementById("textobini3").innerHTML = "Espere un momento antes de entrar al sistema" }, 2000);
setTimeout(function(){ document.getElementById("textobini4").innerHTML = "." }, 2300);
setTimeout(function(){ document.getElementById("textobini5").innerHTML = "." }, 2700);
setTimeout(function(){ document.getElementById("textobini6").innerHTML = "." }, 3100);
setTimeout(function(){ document.getElementById("textobini7").innerHTML = "." }, 3500);
setTimeout(function(){ document.getElementById("textobini8").innerHTML = "." }, 3900);
setTimeout(function(){ document.getElementById("textobini9").innerHTML = "." }, 4300);
setTimeout(function(){ document.getElementById("iniciobios").classList.add("clasecerrarbios") }, 5000);

var diasSemana = new Array("DOM","LUN","MAR","MIE","JUE","VIE","SAB");
var textohelp = document.getElementById("textohelp")
var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
var diasSemanaEntero = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
var fechas = new Date();

function reloj(){
        var fecha = new Date();
        var hora = fecha.getHours();
        var min = fecha.getMinutes();
        var seg = fecha.getSeconds();
        var cuentadia = fecha.getDay();
        var dia = fecha.getDate();
        var mes = fecha.getMonth() + 1;
        var año = fecha.getFullYear();
        var recarga = setTimeout("reloj()", 1000);
        document.getElementById("hora").innerHTML = "System Time " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "[" + hora + ":" + min + ":" + seg + "]" 
        document.getElementById("fecha").innerHTML = "System Date " + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + "["+ diasSemana[cuentadia] + "&nbsp" + dia + "/" + mes + "/" + año + "]"   
}


function clickhora(bal){
    textohelp.innerHTML = "Este reloj marca la hora exacta en el momento actual."
}

function clickfecha(bal){
    textohelp.innerHTML = "Esta fecha nos marca el día actual al que nos encontramos. <br><br><br><br><br><br><br><br><br>" + diasSemanaEntero[fechas.getDay()] + " " + fechas.getDate() + " de " + meses[fechas.getMonth()] + " de " + fechas.getFullYear()
}

var tab = "about:blank"

function cerrar() { 
    window.open(tab,'_self');
 } 

 function clickdatosp(bal){
    textohelp.innerHTML = '<div class="sepdatosp" id="divmenosdatosp"><img src="img.png" alt=""></div>  <div class="sepdatosp" id="divmasdatosp">Nacho Tineo <br> 19 años <br>[31-12-99]<br><br> Valencia, España</div><br> <span class="descdatosp">Me considero una persona valiente a la hora de enfrentarme a todo tipo de proyectos, por eso siempre me gusta toparme con problemas y aprender cualquier cosa en relación a la informática</span>';
}

function clickdatosc(bal){
    textohelp.innerHTML = 'Telf: 609969320 <br> Email: igtime@florida-uni.es';
}

function clickformacion(bal){
    textohelp.innerHTML = '<div class="topcero"><h3> Titulación de BACHILLER CIENTÍFICO</h3> &nbsp&nbsp Descargala <a href="https://drive.google.com/uc?export=download&id=1YQUVwjctgB1Ookx1Az66-YbJZ4pUGQlo">aquí</a> <br> <h3>Actualmente cursando Grado Superior en Desarrollo de Aplicaciones Web </h3> &nbsp&nbsp Más información <a href="http://www.floridauniversitaria.es/es-ES/OfertaAcademica/ciclosformativos/Paginas/desarrollo-aplicaciones-web.aspx?Perfil=Futuro+Estudiante" target="_blank">aquí</a> </div>';
}

function clickidiomas(bal){
    textohelp.innerHTML = '<h3>Inglés: MEDIO</h3>   <br>   <h3>Español: ALTO</h3>  <br> <h3>Valenciano: ALTO</h3>  ';
}

function clickexperiencia(bal){
    textohelp.innerHTML = 'He desarrollado varias web de venta de servicios relacionados con el marketing digital. <br><br> <a href="https://mypanelapps.com">Mypanelapps.com</a> <br> <a href="https://sketool.io">Sketool.io</a> ';
}

function clickaficiones(bal){
    textohelp.innerHTML = 'Una de mis aficiones principales es el ir a hacer Deporte, pero también dedico parte de mi tiempo al <b>trading</b> y a la <b>programación.</b> ';
}

function cerrarpanelp(bal){
    document.getElementById("panelproyectos").classList.add("panelproyectos");
}

function abrirpanelp(bal){
    document.getElementById("panelproyectos").classList.remove("panelproyectos");
}

function cerrarpanelc(bal){
    document.getElementById("panelcontacto").classList.add("panelproyectos");
}

function abrirpanelc(bal){
    document.getElementById("panelcontacto").classList.remove("panelproyectos");
}
