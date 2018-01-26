/**
 * Created by mac on 18/1/25.
 */
import web3 from '../services/web3'

export default {
    namespace: 'IndexModel',
    state:{
        ModelName:"首页",
        block:{},
        transactionReceipt:{},
        transactionCount:{},
        storageAt:{},
        contract:{},
        pastEvents:{},
    },
    reducers: {
        updateBlock(state, { payload }) {
            return { ...state, block:payload}
        },
        updateTransactionReceipt(state, { payload }) {
            return { ...state, transactionReceipt:payload}
        },
        updateTransactionCount(state, { payload }) {
            return { ...state, transactionCount:payload}
        },
        updateStorageAt(state, { payload }) {
            return { ...state, storageAt:payload}
        },
        updateContract(state, { payload }) {
            return { ...state, contract:payload}
        },
        updatePastEvents(state, { payload }) {
            return { ...state, pastEvents:payload}
        },
    },
    effects: {
        *getAccorgCollect({ payload }, { call, put, select }) {
            try{
                let blockData = yield call(web3.updateBlock,payload.number);
                if(blockData){
                    yield put(createAction('updateBlock')(blockData))
                }
            }catch(e) {

            }
        },
    },
}