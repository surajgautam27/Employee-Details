class employee{
    constructor(name,address,email,phone,type){
    this.name=name,
    this.address=address,
    this.email=email,
    this.phone=phone,
    this.type=type
}
}
class Details{
   
    add(Employees){
        console.log('adding');
        let tableBody= document.getElementById('tableBody');
        //i have to add index number using loop
        let info=`
        <tr>
        
        <td>${Employees.name}</td>
        <td>${Employees.address}</td>
        <td>${Employees.email}</td>
        <td>${Employees.phone}</td>
        <td>${Employees.type}</td>
       </tr> `;
        
       tableBody.innerHTML += info;
        
    }
    clear(){
        let empForm= document.getElementById('empForm');
        empForm.reset();
    }
    validation(Employee){
        if(Employee.name.length<2 || Employee.address.length<2){

return false;
    }
    else{
        return true;
    }
    }
    show(type,displayMessage){
        let message= document.getElementById('message');
        message.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Message</strong> ${displayMessage}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
      setTimeout(() => {
        message.innerHTML=''
        
      }, 2000);


    }

}
let empForm= document.getElementById('empForm');
 empForm.addEventListener('submit',submitForm);

 function submitForm(e){
    console.log('you have submitted the form');
    let name=document.getElementById('empName').value;
    let address=document.getElementById('empAddress').value;
    let email=document.getElementById('empEmail').value;
    let phone=document.getElementById('empPhone').value;
    let type;
    if(male.checked){
        type=male.value;
    }
else{
    type=female.value;
}
let Employees =new employee(name,address,email,phone,type);
console.log(Employees)
let detail = new Details();
if(detail.validation(Employees))
{
detail.add(Employees);
detail.clear();
detail.show('success',' your detail has been added')
   
}
else{
    //error occur 
    detail.show('danger',' Sorry Unable to insert your details')
}
e.preventDefault();
 }
