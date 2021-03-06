import * as actionTypes  from "../constants/userInfo";

export default function userInfo(state={}, action) {
    switch(action.type) {
        // 这里有性能的问题，可以用ES6扩展运算符优化 ---已解决
        case actionTypes.USERINFO_UPDATE: {
            // return action.data
            return {...state, ...action.data}
        }
        default : {
            return state
        }
    }
}
