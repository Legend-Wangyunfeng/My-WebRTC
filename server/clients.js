class Clients {
  constructor() {
    this.users = {};
  }
  addUser(user) {
    if(!user?.username) return;
    if(this.users[user.room]) {
      if(this.users[user.room].length === 2) {
        const msg = "Max member in a room is 2!";
        return msg;
      }
      else if (this.users[user.room].length < 2) {
        this.users[user.room].push(user);
      }
    }
    else {
      this.users[user.room] = [user];
    }
  }
  removeUser(user) {
    if(!user?.username) return
    if(this.users[user.room]) {
      this.users[user.room] = this.users[user.room].filter(u => u.id !== user.id);
    }
  }

}