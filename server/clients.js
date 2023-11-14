import { ERR_CODE } from "./enum.js";

class Clients {
  constructor() {
    this.users = {};
  }
  addUser(user) {
    if(!user?.username || !user?.room) return ERR_CODE.COMPLETED;
    if(this.users[user.room]) {
      if(this.users[user.room].length === 2) {
        return ERR_CODE.FULL;
      }
      else if (this.users[user.room].length < 2) {
        this.users[user.room].push(user);
      }
    }
    else {
      this.users[user.room] = [user];
    }
    return ERR_CODE.SUCCEED;
  }
  removeUser(user) {
    if(!user?.username) return
    if(this.users[user.room]) {
      this.users[user.room] = this.users[user.room].filter(u => u.id !== user.id);
    }
  }
  getUserList(room) {
    if(this.users[room]) {
      return this.users[room];
    }
  }

}

export default Clients;