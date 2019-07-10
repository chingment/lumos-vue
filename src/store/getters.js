export const getters = {
    getAId: (state) => state.aId,
    getUId: (state) => state.uId,
    getMessagesBox (state){
         state.messageBox=JSON.parse(localStorage.getItem("MESSAGEBOX"));

         return state.messageBox;
    }
}
