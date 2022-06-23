// const input = document.querySelector("input")
// input.addEventListener("keydown", function (){
//     console.log("KEYDOWN")
// })
// input.addEventListener("keyup",function () {
//     console.log("KEYUP")
// })

const form = document.querySelector("form")
const ul = document.querySelector("#one")

form.addEventListener("submit",function (evt) {
    evt.preventDefault();
    let catName = document.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = catName
    ul.append(li)
    document.querySelector("input").value = ''
})