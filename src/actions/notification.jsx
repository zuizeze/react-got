import actionsType from './actionsType.jsx'
export const maskNotification = (id) => {
  return dispatch => {
    //这里是模拟的服务端请求
    setTimeout(()=>{
      dispatch({
        type:actionsType.maskNotification
      })
    },1000)
  }
}