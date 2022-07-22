let num = +prompt("Enter Table");
if (isNaN(num)) {
    alert("invalid entry.please enter a number!")
}
else{
let i = 0;
document.write('<table border ="10" cellspacing= "10">');
for (i = 0; i <= 10; i++) {
    document.write("<tr><td bgcolor= white >" + num + " x " + i + " = " + num * i + "</td></tr>");
}
document.write("</table>");
}