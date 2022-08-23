import { combineReducers } from "redux";
import cartreducer from './BookCart/cart_reducer'
const rootReducer = combineReducers({
    shop:cartreducer ,
})

export default rootReducer
 