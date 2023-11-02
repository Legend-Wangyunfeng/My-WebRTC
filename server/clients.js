class Clients {
  constructor() {
    this.users = []
  }
  addUser(user) {
    if(!user?.username) return
    //如果users中存在与user的username属性相同的元素，则直接返回
    if(this.users.find(item => item.username === user.username)) {
      return
    }
    this.users.push(user)
  }
  removeUser(user) {
    if(!user?.username) return
    this.users = this.users.filter(item => item.username !== user.username)
  }
  getUser(username) {
    return this.users.find(item => item.username === username)
  }
}