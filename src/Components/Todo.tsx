import { useState } from "react";
import TaskCard from "./Task";
import Task from "./Task";
import TaskCardLine from "./Task1";

const DataType:any[]=[];
function Todo() {
    const [Todos,setTodos] = useState([
        {
            text:"I am a task",
            isdone:false
        }
    ])
    const [Todo,setTodo]=useState("")

    function addTodo(text:any){
        const newTodos:any = [...Todos,{text,isdone:false}]
        setTodos(newTodos);
    }

    function markDone(index:number){
        const newTodos = [...Todos]
        DataType.push(newTodos[index]);
        delDelete(index)
        
    }

    function delDelete(index:any){
        const newTodos = [...Todos]
        newTodos.splice(index,1)
        setTodos(newTodos)
    }
    const ShowYourSelf = Todos.map((data,index)=>{
        return <TaskCard key={index} index={index} value={data} onDelete={delDelete} onDone={markDone} />
    }).slice(0).reverse()
    const PPisGod = DataType.slice(0).reverse().map((data,index)=>{
        return <TaskCardLine key={index}  value={data}  />
    })
    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        /* check pressing enter key here */
        if(ev.key == "Enter"){
            if(ev.currentTarget.value !==""){
                addTodo(ev.currentTarget.value)
                setTodo("")
            }else{alert("Task cannot be empty.")}
        }
      }
    return (
        <div className='mx-auto max-w-4xl'>
            <div className='flex space-x-1'>
                <input className='border border-gray-400 w-full text-2xl'
                    name='todo'
                    id="input1"
                    value={Todo}
                    onChange={(event)=>setTodo(event.target.value)}
                    onKeyDown={onKeyDownCallback} ></input>
                <button type="submit"  className='border border-gray-400 w-8 font-bold' 
                    onClick={e=>{
                        e.preventDefault()
                        if(Todo!==""){
                            addTodo(Todo)
                            setTodo("")
                        }else{
                            alert("Task cannot be empty.")
                        }
                    }}
                >+</button>
            </div>
          {ShowYourSelf}
          {PPisGod}
        </div>
    );
}
export default Todo;