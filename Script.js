var shown1 = document.getElementById("shown1")
var shown2 = document.getElementById("shown2")
var menuimg = document.getElementById("menuimg")
// media (max-width768px)
function Showinfo() {
    shown1.classList.add("shown1")
    shown2.classList.add("shown2")
}
function Removeinfo() {
    shown1.classList.remove("shown1")
    shown2.classList.remove("shown2")
}
menuimg.addEventListener("mouseenter", Showinfo)
menuimg.addEventListener("mouseleave", Removeinfo)
if(screen.width === "690px"){
    alert("the browser dont support your width & hieght")
}