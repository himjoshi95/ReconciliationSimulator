 // State Management
const todos = [];

 // Handling Updates
 function addTask(){
     todos.push({
         title: document.querySelector('input').value
     });

     render();
     document.querySelector('input').value = ' ';
};

 function deleteTask(id){
     todos.splice(id, 1);
     render();
};

 // Component Representation
 function divComponent(todo,index){
     const span = document.createElement('span');
     const button = document.createElement('button');
     span.innerHTML = todo.title;
     button.innerHTML = "Delete";
     button.setAttribute('onclick',`deleteTask(${index})`);
     const div = document.createElement('div');
     div.appendChild(span);
     div.appendChild(button);
     return div;
};
  //Re-rendering - mocking a reconciler
 function render(){
     document.querySelector('#todos').innerHTML = '';
     todos.forEach(function(todo,index){            
         const div = divComponent(todo,index);
         document.querySelector('#todos').appendChild(div);
     })
};