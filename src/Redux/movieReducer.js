export const movieReducer=(state={Watchlist:[]},action)=>{
    if(action.type==="WATCHLIST"){
        return{...state,Watchlist:[{...action.data,key:state.Watchlist.length},...state.Watchlist]}
    }
    return state
}