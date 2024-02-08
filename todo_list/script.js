const item=document.querySelector('#item')
const addtodo=document.querySelector('#add_todo')
const todo=document.querySelector('#to-do')

addtodo.addEventListener('click',()=>{
    if(item.value==''){
        alert('please add todo')
        return
    }
    addTodo(item.value)
    item.value=""
})

const addTodo=(item)=>{
   const list_item=document.createElement('li')
   list_item.innerHTML=`
   ${item}
   <i class="fas fa-times"></i>
   `;
   list_item.addEventListener('click',function(){
     this.classList.toggle('done')
   })
   list_item.querySelector('i').addEventListener('click',()=>{
    list_item.remove()
   })
   todo.appendChild(list_item)

}