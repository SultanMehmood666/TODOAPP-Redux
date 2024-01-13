const initialState = {
    ToDoData: []
}

const AddReducer = (state=initialState, action) => {
    const {type,payload} = action;
    switch(type){
        case "AddToDo":
            const newToDoItem = {
                id: new Date().getTime(),
                value: payload,
            }

            return {
                ...state,
                ToDoData: [...state.ToDoData, newToDoItem],
            };

        case "RemoveAllToDO":
            return {
                ...state,
                ToDoData: [],
            };

        case "EditSave":
            console.log("Edit Save Reducer:", payload)
                console.log("AddReducer EditSave:",payload)
                console.log("AddReducer EditSave payloadvalue:", payload.editvalue);
            const SavedToDoList = state.ToDoData.map(item=>item.id === payload.itemId ? {...item, value: payload.editvalue} : item);
            return {
                ...state,
                ToDoData: SavedToDoList,
            };
        
        case "DeleteItemToDo":
            const DeleteToDoList = state.ToDoData.filter(item => item.id !==payload);
            return {
                ...state,
                ToDoData: DeleteToDoList,
            };

        default:
            return state;
    }
}
export default AddReducer;