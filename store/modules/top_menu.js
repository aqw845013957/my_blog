const state = () => ({
  // 保存激活路由
  activeRoute:'1'
})
const mutations = {
  // 监听当前路由改变
  changeActiveRoute(state,currentRoute){
    switch(currentRoute){
      case '/': 
        state.activeRoute = '1' 
        break;
      case '/article_list':
        state.activeRoute = '2'
        break;
      case '/demo':
        state.activeRoute = '3'
        break;
      case '/photo':
        state.activeRoute = '4'
        break;
      default:
        state.activeRoute = '1'
    }
  },
}
export default {
  namespaced: true,
  state,
  mutations
}