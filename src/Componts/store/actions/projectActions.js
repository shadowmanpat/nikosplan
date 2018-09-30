export const createProject = (project) => {
    return(dispatch, getState) =>{
        // make async call to database
        dispatch({tyoe:'CREATE_PROJECT', project});
    }
}