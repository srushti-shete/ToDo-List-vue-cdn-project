new Vue( {

    el: '#app',

    data: {
        todo: '',
        todos: [],
        isError: false,

    },

    methods: {
            storeToDo() {
                if(this.todo!=""){
                this.todos.push(this.todo)
                this.todo=''
                this.isError=false
            } else{
                this.isError=true
            }
        },
            deleteToDo(index){
                this.todos.splice(index, 1)
            }
    }
    
})

















































// function StoreToDo(){
//     document.getElementById('error').innerHTML="";

//     let name=document.getElementById('name').value;
//     if(name==''){
//         document.getElementById('error').innerHTML="*Please enter value";
//     }else{
//         let box=document.getElementById('box');
    


//         let li=document.createElement('li');
//         li.textContent=name;

//         let a=document.createElement('button');
//         a.textContent="Remove";
//         a.href="javascript:void(0)";
//         a.className="remove";
//         li.appendChild(a);

//         box.appendChild(li);

//         // let pos=box.firstElementChild;
        
//         // if (pos==null){
//         //     box.appendChild(li);
//         // }else{
//         //     box.insertBefore(li,pos);
//         // }

    // }
//     document.getElementById('name').value="";
// }

// let btn=document.querySelector('ul');
// btn.addEventListener('click', function(e) {
//     let box=document.getElementById('box');
//     let li=e.target.parentNode;
//     box.removeChild(li);

// });