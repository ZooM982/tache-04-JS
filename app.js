// BOUCLE FOR
document.write("<table border='1px'>");

var k=parseInt(prompt('Entrer le nombre à mutltiplier pour la boucle FOR: '));
document.write("<h3>Voici la table de multiplication par\n" + k + "\n avec la boucle FOR</h3><br>")
    document.write("<tr style='margin:10px'>");

    for(j= 0; j<=12; j++){
    {
     document.write("<td >"+k+" X "+ j + " = " + j*k +"</td>");   
    }
    document.write("</tr>");
    } 
     
document.write("</table><br><br>");

//BOUCLE DO-WHILE

let val="";
let i=0;
val=prompt("Entrer une valeur positive pour la boucle DO-WHILE");
document.write("<table border='1px'>");
if (val<=0 || val>1000) {
    document.write("<h2 class='alert-danger'>Merci de donner une valeur comprise entre 1 et 1000</h2>");
}else{
    document.write("<h3>Voici la table de mutliplication par\n"+val+"\navec la boucle DO-WHILE:</h3><br>")
do {
    document.write("<tr style='margin:10px'>");
    document.write("<td>" +val+ " X "+i+" = "+ i*val+"</td>");
    i++;
    document.write("</tr>");
} while (i<=12);}
document.write("</table><br><br>");

