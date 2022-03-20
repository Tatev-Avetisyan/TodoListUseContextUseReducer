

export const ACTION_TYPES={
    ADD:'ADD',
    EDIT:'EDIT',
    DELETE:'DELETE',
    DONE:'DONE',
    DELETECOMPLETED:"DELETECOMPLETED"
    
}  

// const{ADD,DONE,DELETE,EDIT,DELETECOMPLETED}=ACTION_TYPES

export const actionAdd = (title,description)=>({
    type:ACTION_TYPES.ADD,
    payload:{
        title,
        description
    }

});
export const actionDelete= (id)=>({
    type:ACTION_TYPES.DELETE,
    payload:{id}

    }
)
export const actionEdit=(id, title, description)=>({
    type:ACTION_TYPES.EDIT,
    payload:{
        id,
        title,
        description
    }
})
export const actionDone=(id,isDone)=>({
    type:ACTION_TYPES.DONE,
    payload:{
        id,
        isDone
    }
})

export const actionDeleteCompleted=()=>({
    type:ACTION_TYPES.DELETECOMPLETED,
    
    
})
