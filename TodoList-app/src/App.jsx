import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Create from './Create'
import Todo from './Todo'
function App() {
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    axios.get('http://localhost:3002/Home')
    .then(result=>setTodos(result.data))
    .catch(error=>console.log(error))
},[])
function handleDelete(){
  axios.delete('http://localhost:3002/delete',{done:true})
  .then(result=>location.reload())
  .catch(err=>console.log(err))
}

  return (
    <div className='flex flex-col space-y-5 justify-center items-center mx-auto my-[30px]'>
        <div>
           <h1 className='font-bold text-[30px]'>Todo List</h1>
        </div>

            <Create/>


                 {
                  todos.length==0?<h1 className='font-bold'>No Records</h1>:todos.map(todo=>(

                    <div className='font-bold'>
                    <Todo task={todo.task} id={todo._id} done={todo.done}/>
                    </div>
                    
                  ))
                 }
                 <button className='p-[4px] px-[8px] border-solid border-2 rounded-sm border-stone-950' onClick={()=>handleDelete()}>Clear All Finished Tasks</button>
        
        
      
    </div>
  )
}

export default App
