const initialState ={
    cardData:[]
}

export default function cardItem( state = initialState,action){
switch (action.type) {
    case"ADDITEM":
        return{
            ...state,
            cardData:action.data
        }

    default:
        return state
}
}