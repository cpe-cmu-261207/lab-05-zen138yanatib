function TaskCardLine(props:any){
    const { value } = props
    return (
        <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl line-through" > {value.text} </span>
            <div className="flex space-x-1 items-center ">
            </div>
          </div>
    );
}
export default TaskCardLine;