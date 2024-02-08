const button=document.querySelector("Button")
const picker=document.querySelector("input")
const body=document.querySelector("body")
const color=['red','green','blue','purple','pink','steelblue']

body.style.backgroundColor='black'

button.addEventListener('click',()=>{
    const colorIndex=parseInt(Math.random()*color.length)
    body.style.backgroundColor=color[colorIndex]
})

picker.addEventListener('change',()=>{
    const choosenColor=picker.value;
    body.style.backgroundColor=choosenColor
})


