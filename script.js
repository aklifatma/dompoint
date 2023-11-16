const h1 = document.querySelector('body')
console.log(h1)
const grp = document.querySelector("#grp")
console.log(grp)
const button = document.querySelector(".btn")
console.log(button)
const div= document.querySelectorAll(".class-Name")
console.log(div)


button.addEventListener("click",function(e){
    grp.style.backgroundColor ="pink"
})
h1.innerHTML="Break time"

