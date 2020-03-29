// import { combineReducers } from 'redux'


// export default combineReducers({
// })

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
      // const newTodoItem = {
      //   "id":state.length ++
      //   "value":""
      // }
      return {
        ...state,
        inputValue:action.value
      }
    default:
      return state
  }

}
