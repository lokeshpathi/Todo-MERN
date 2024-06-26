import React,{useRef} from 'react'
import axios from 'axios'
function Create() {

  const ElementRef = useRef();

  function handleAdd(ele){

   if (ele.value!=""){
    axios.post("http://localhost:3002/add",{task:ele.value,done:false})
    .then((result)=>{
          location.reload()
          ele.value=""
    }).catch((error)=>{
      console.log(error)
    })
   }
      

  }

  return (
    <div className='flex justify-center items-center gap-5'>
        <input type="text" placeholder='Enter new task'
         className='p-[4px] px-[8px] border-solid border-2 rounded-sm border-stone-950'  ref={ElementRef}/>
        <button className='p-[4px] px-[8px] border-solid border-2 rounded-sm text-white bg-black
         border-stone-950 hover:text-black hover:bg-white font-semibold hover:transition duration-75' onClick={()=>handleAdd(ElementRef.current)}>Submit</button>
    </div>
  )
}

export default Create