import { 
    SET_DOC_MODE, 
    SET_SELECTED_DOC,
    SET_SELECTED_MENU_ITEM
} from "./actions";
// import { initialState } from "./appContext";
const reducer = (state,action) => {

    if(action.type === SET_DOC_MODE){
        return {
            ...state,
            doc_mode : action.payload.mode
        }
    }

    if(action.type === SET_SELECTED_DOC){
        return {
            ...state,
            selected_doc : action.payload.selected_doc
        }
    }

    if(action.type === SET_SELECTED_MENU_ITEM){
        return {
            ...state,
            selected_menu_item : action.payload.selected_menu_item
        }
    }

    throw new Error(`no such action : ${action.type}`)
}  

export default reducer