
import { useEffect, useState } from "react";
import "./List.css"
import axios from "axios"
const List = () => {
  const [showInput, setShowInput] = useState(false);
  const [title, setTitle] = useState('');
  //const [arr, setArr]= useState([])

  const handleCreateList = async () => {
    const response = await fetch('https://puce-lazy-kingfisher.cyclic.app/list/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    });
    if (response.ok) {
      //const newList = await response.json();
       
    } else {
      // Handle list creation error
    }
  };
    
   const  draggingOver =(e)=>{
      e.preventDefault();
      console.log("draggover");
   }
   const  draggedDrop = ()=>{
  
    console.log("sucses");
   }

    const handleClick = () => {
      setShowInput(true);
    };
  
    const handleInputBlur = () => {
      setShowInput(false);
    };
  
    const arr = [
        {id:1,title:["task1","task2","task3"]},
        {id:2,title:["task4","task5","task6"]},
        {id:3,title:["task7","task8","task9"]},
        {id:4,title:["task10","task11","task12"]},
    ]
    useEffect(()=>{
      axios.get("https://puce-lazy-kingfisher.cyclic.app/list/get").then(({data})=>console.log(data))
     })
  return (
    <>
     <div className="listflexdiv">
        {arr.map((e)=><FlexList onDragOver={(e)=>draggingOver(e)} 
        onDrop={()=>draggedDrop()} key={e.id} data={e.title}></FlexList>)}
        <div className="createlistdiv">
          <h2>Create New List</h2>
          <button  className="but" onClick={handleClick}>X</button>
      {showInput && (
       <div>
         <input
          type="text"
          placeholder="Enter value"
          onChange={(e)=>{setTitle(e.target.value)}}
          onBlur={handleInputBlur}
        />
        <button onClick={handleCreateList}>add</button>
       </div>
        
      )}

        </div>
     </div>
    </>
  )
}

function FlexList(data){
   
    return (
        <div  className="boxflexdiv">
          {data.data.map((e,i)=>{
           return (
            <div draggable key={i}>
              <input type="checkbox" />  
                {e}</div>
           ) 
          })}

        </div>
    )
}

export default List