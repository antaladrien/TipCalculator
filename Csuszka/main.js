function szinez(){
r= document.getElementById("r").value;
g= document.getElementById("g").value;
b= document.getElementById("b").value;

document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";

document.getElementById("rErtek").innerHTML = r;
document.getElementById("gErtek").innerHTML = g;
document.getElementById("bErtek").innerHTML = b;

document.getElementById("hexa").innerHTML = "#"+
parseInt(r).toString(16)+
parseInt(g).toString(16)+
parseInt(b).toString(16);
}