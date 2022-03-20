import { useEffect, useContext} from "react"
import {TodoContext} from "../../ContextProviders/TodosProvider"
import classes from "../ToDoMain/TodoMain.module.css"

function Footer(){
    const ctx = useContext(TodoContext)
    
    let completed = ctx.filteredList.filter(todo=>todo.isDone).length

    useEffect(() => {
      console.log({completed})
    }, [completed])

    useEffect(() => {
      console.log(ctx.filteredList)
        
    }, [ctx.filteredList])

    return(
        <div className={classes.card}>
            <p> {completed}/{ctx.filteredList.length} Completed</p>
            
            <button onClick = {ctx.onDeleteCompleted}> Deleted Completed Todos</button>
        </div>
    )
}
export default Footer