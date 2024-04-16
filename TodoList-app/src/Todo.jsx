import React from 'react'
import axios from 'axios'
import { MdDeleteForever } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

function Todo({task,id,done}) {
    const handleDelete=(id)=>{
        axios.put('http://localhost:3002/update/'+id)
        .then(res=>
                location.reload()
            )
        .catch(err=>console.log(err))
    }
    const bg =  done?'bg-slate-300 border-0': 'bg-slate-700'
  return (
    <div className={`flex justify-between mx-3 items-center gap-3 p-[4px] px-[8px] border-solid border-2 
    rounded-md border-stone-950 font-serif text-white md:w-96 bg- ${bg}`}>
            <p className='ml-3'>{task} </p>        
            <p  className=' size-5'>
           { done?<IoCheckmarkDoneSharp className=' text-black'/>:<MdDeleteForever onClick={()=>handleDelete(id)} className=' cursor-pointer'/>}
            </p>
            
    </div>
  )
}

export default Todo