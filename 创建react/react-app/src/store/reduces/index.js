

import studentReducer from "./studentReducer"
import schoolReducer from "./schoolReducer"


import StudentApi from "./rtk-query"


// api  qeuery


const reducer={
    [studentReducer.name]:studentReducer.reducer,
    [schoolReducer.name]:schoolReducer.reducer,
    
}



export default reducer