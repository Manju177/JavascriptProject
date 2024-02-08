const empData=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users");
    const data=await response.json();
    let employess=data
    console.log(employess)
    let selectedEmploeeId=employess[0].id;
    let selectedEmployee=employess[0]

    const employeeList=document.querySelector('.employees_names--list')
    const employees_names=document.querySelector('.employees_names--info')
    const employeInput=document.querySelector('.employeInput')

    const createEmployee=document.querySelector('.addEmployee')
    const modelBtn=document.querySelector('.addEmp')
    const dobInput=document.querySelector('.dob')

    modelBtn.addEventListener('click',()=>{
        createEmployee.style.display="flex"       
    })
   
    createEmployee.addEventListener('click',(e)=>{
        console.log('bg',e.target.tagName);
        if(e.target.tagName=='DIV'){
            createEmployee.style.display="none"
        }
    });
    console.log('employeInput',employeInput)
    dobInput.max=`${new Date().getFullYear()-18}-${new Date().toISOString().slice(5,10)}`
    console.log('dob.max',dobInput.max)
    createEmployee.addEventListener('submit',(e)=>{
       e.preventDefault();
       const formData=new FormData(employeInput);
       const values=[...formData.entries()]
       const empData={}
       values.forEach((val)=>[
            empData[val[0]]=val[1]
       ])
       empData.id=employess[employess.length-1].id+1;
       employess.push(empData)
        if(empData=={}){
            console.log('empty')
            return;
        }
        renderEmployees()
        employeeList.reset()
        
    })
 

    employeeList.addEventListener('click', (e) =>{
        console.log('e.target.tagName',e.target.tagName)
        if(e.target.tagName === 'SPAN' && selectedEmploeeId!==e.target.id){
            selectedEmploeeId=e.target.id;
            console.log('selectedEmploeeId',selectedEmploeeId)
            renderEmployees()
            renderSingleEmployee()
        }
    })

    const renderEmployees=()=>{
      employeeList.innerHTML="";
       employess.forEach((val)=>{
        const employee=document.createElement('span')
        employee.classList.add('employ')
        if(parseInt(selectedEmploeeId,10)===val.id){
            employee.classList.add('active')
            selectedEmployee=val;
        }
        employee.setAttribute('id',val.id);
        console.log('emp',val.name)
        employee.innerHTML=`${val.name} `;
        employeeList.append(employee)
        employeInput.reset()
       })
    }
    

    const renderSingleEmployee=()=> {
        console.log('selectedEmployee', selectedEmployee)
        employees_names.innerHTML=`<h2>${selectedEmployee.name}</h2>
        <br/>
        <b>Email</b>: <span>${selectedEmployee.email}</span>
        <br/>
        <b>Phone</b>: <span>${selectedEmployee.phone}</span>
        <br/>
        <b>Website:</b> <span>${selectedEmployee.website}</span>`
    }
    renderEmployees()
}
empData()
