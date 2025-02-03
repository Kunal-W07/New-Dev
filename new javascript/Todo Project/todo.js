console.log("hi")

let todoarr =[
    {item:'buymilk',
     duedate :'4/8/2024'   
    },
    {item:'go to collage',
        duedate :'4/9/2024'
    }
];


function addtodo(){
    let todoid = document.querySelector('#t1');
    let tododate = document.querySelector('#todo-date');
    let tdatevalue = tododate.value;
    let todovalue = todoid.value; 
    todoarr.push({item: todovalue , duedate: tdatevalue})
    todoid.value ='';
    tdatevalue.value='';
    display()
   
}

function display(){
    let contenerelement = document.querySelector('#contener');
    let newHtml = '';

    for(let i =0; i<todoarr.length; i++){
        let item = todoarr[i].item;
        let duedate = todoarr[i].duedate;
    newHtml +=`
    
      <span> ${item} </span>
      <span> ${duedate} </span>
      <button onclick="todoarr.splice(${i},1);display();">Delete</button
    
    `;
    }
    contenerelement.innerHTML = newHtml;
}