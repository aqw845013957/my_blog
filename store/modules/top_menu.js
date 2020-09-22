const state = () => ({
  activeRoute:''
})
const mutation = {
  changeActiveRoute(state,currentRoute){
    state.activeRoute = currentRoute
  }
}
export default {
  namespaced: true,
  state,
  mutation
}