import { message } from 'antd'
import produce from 'immer'
export default {
    namespace: 'user',
    state: {
        count: 0,
        items: [],
    }, 
    subscriptions: {
        setup({dispatch, history}) {
            dispatch({ type: 'add'})
        }
    },
    reducers: {
        add(state, action) {
            // 采用dva-immer 可以很简单的处理state的数据；
            return produce(state, drafState => {
                drafState.count += 1;
                drafState.items.push({
                    name: 'drafState',
                    passwd: '1234567890',
                })
            })  
            // state.count += 1;
            // state.items.push({name: "loiter", passwd: "123456"})
            // return {
            //     count : state.count + 1
            // }
        }
    },
    effects: {
        *fetch(
            { type, payload }, { put, call, select }
        )
    }
}