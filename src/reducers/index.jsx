
const defaultState = {
  "inputValue": "write something",
  "list": [
    {
      "id": "1",
      "text": "mysql learning",
      "completed": true
    },
    {
      "id": "2",
      "text": "nginx learning",
      "completed": false
    },
    {
      "id": "3",
      "text": "react learning",
      "completed": false
    },
  ]
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case "changeInputValue":
      return {
        ...state,
        inputValue: action.value
      }

    //创建todoList
    case "addTodo":
      const tmp_list = state.list
      const newTodoItem = {
        "id": tmp_list.length,
        "text": action.value,
        "completed": false
      }
      tmp_list.push(newTodoItem)
      return {
        ...state,
        list: tmp_list
      }
    //删除一条todoList
    case "deleteTodo":
      const deleteTodoList = state.list
      deleteTodoList.splice(action.index, 1)
      return {
        ...state,
        list: deleteTodoList
      }
    default:
      return state
  }
}
