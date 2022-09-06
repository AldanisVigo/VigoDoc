import { useContext,createContext, useReducer } from "react";
import reducer from './reducer'

import { CREATE_DOCUMENT_BEGIN, 
    CREATE_DOCUMENT_SUCCESS, 
    CREATE_DOCUMENT_ERROR,
    SET_DOC_MODE,
    SET_SELECTED_DOC, 
    SET_SELECTED_MENU_ITEM
} from './actions'

const user = localStorage.getItem('user')
const initialState = {
    documents : [],
    doc_mode : 'add',
    selected_doc : null,
    selected_menu_item : '/'
}

const AppContext = createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer,initialState)

    const setSelectedMenuItem = (selected_menu_item) => {
        dispatch({
            type : SET_SELECTED_MENU_ITEM,
            payload : {
                selected_menu_item
            }
        })
    }

    const setDocMode = (mode) => {
        dispatch({
            type : SET_DOC_MODE,
            payload : {
                mode
            }
        })
    }

    const setSelectedDoc = (doc) => {
        dispatch({
            type : SET_SELECTED_DOC,
            payload : {
                selected_doc : doc
            }
        })

    }

    return <AppContext.Provider value={{
        ...state,
        setDocMode,
        setSelectedDoc,
        setSelectedMenuItem
    }}>
        {children}
    </AppContext.Provider>
}

const useAppContext = () => {
    return useContext(AppContext)
}

export { AppProvider, initialState, useAppContext}