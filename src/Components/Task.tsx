import { useState } from "react";
import { textSpanContainsTextSpan } from "typescript";

function TaskCard(props:any){
    const { index,value,onDelete,onDone} = props
    const [Check, setCheck] = useState(false)
    
    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
            onMouseOver={(ev)=>{setCheck(ev.bubbles);console.log(ev.bubbles)}} onMouseLeave={()=>{setCheck(false);}}
          >
            <span className="text-2xl "style={{ textDecoration: value.isDone ? "line-through" : "" }} > {value.text} </span>
            <div className="flex space-x-1 items-center ">
              <button className="bg-green-400 w-24 text-2xl "
                style={{visibility: Check ?"visible":"hidden"}} 
                onClick={()=>{onDone(index)}}>Done</button>
              <button className="bg-red-400 w-24 text-2xl" 
                style={{visibility: Check ?"visible":"hidden"}}
                onClick={()=>onDelete(index)}>Delete</button>
            </div>
          </div>
    );
}
export default TaskCard;