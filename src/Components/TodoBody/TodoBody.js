import { useContext } from "react";

import {TodoContext} from "../../ContextProviders/TodosProvider"
import TodoCard from "../TodoCard"       


function TodoBody(){
    const ctx = useContext(TodoContext)
    console.log('bodyRender');
   
    return(
        <div>
            {ctx.filteredList.map((item)=>{
                return <TodoCard  key = {item.id} item={item}/>
            })}

        </div>
    )
}

export default TodoBody