const getters = {
  docHeight: state => state.app.docHeight,
  isBreak: state => state.user.isBreak,
  menuFlag: state => state.app.menuFlag,
  userId: state => state.user.userId,
  realname: state => state.user.realname,
  ishuadata: state => state.user.ishuadata,
  roleCode: state => state.user.roleCode,
  roleId: state => state.user.roleId,
  userInfo: state => state.user.userInfo,
  userName: state => state.user.userName,
  userRole: state => state.user.userRole,
  routerNow: state => state.user.routerNow,
  userOrg: state => state.user.userOrg,
  btnAuth: state => state.user.btnAuth,
  menuData: state => state.permission.menuData,
  routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  token: state => state.user.token,
  constructionCode: state => state.user.constructionCode,
  constructionName: state => state.user.constructionName
}
export default getters