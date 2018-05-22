export default{
    addNote({commit}){
    	commit('ADD_NOTE')
    },
    deleteNote({commit}){
    	commit('DELETE_NOTE')
    },
    favorNote({commit}){
    	commit('FAVOR_NOTE')
    },
    SetActiveNote({commit},note){
    	commit('SET_ACTIVE_NOTE',note)
    },
    editNote({commit},note){
        commit('EDIT_NOTE',note)
    }
}