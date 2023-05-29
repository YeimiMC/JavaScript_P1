// Solicitar al usuario que ingrese su signo zodiacal
var signo = prompt("Ingresa tu signo zodiacal para saber cómo estará tu semana:");

//Aquí se pondrá la leyenda dependiendo del signo ingresado
switch (signo) {
  case "aries":
    alert("Esta semana nadie te va a molestar");
    break;

  case "tauro":
    alert("Esta semana vas a dormir 10 minutos más");
    break;

  case "géminis": case "geminis": 
    alert("Esta semana sabrás que tus conocidxs te adoran");
    break;
    
  case "cáncer": case "cancer": 
    alert("Esta semana te van a dar mucho amorcito");

    break;
  case "leo":
    alert("Esta semana tu crush le va a dar Me encanta a tus fotos favoritas");
    break;

  case "virgo":
    alert("Esta semana todo va a salir excelente, como a ti te gusta");
    break;

  case "libra":
    alert("Esta semana vas a completar todas las tareas que decidiste hacer");
    break;

  case "escorpio":
    alert("Esta semana pondrán tu playlist de música favorita");
    break;

  case "sagitario":
    alert("Esta semana te van a invitar a muchas fiestas");
    break;

  case "capricornio":
    alert("Esta semana vas a recibir un premio");
    break;

  case "acuario":
    alert("Esta semana brillarás por tu creatividad");
    break;

  case "piscis":
    alert("Esta semana tendrás mucho cariño a donde vayas");
    break;

  default:
    alert("No te hagas, ese no es un signo zódiacal. Vuelve a intentarlo para averiguar qué te depara la semana.");
}