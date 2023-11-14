import { SOCKET_ON_RTC, SOCKET_ON_SYS, SOCKET_ON_EMIT, ERR_MSG, ERR_CODE } from './enum.js';
import initApp from './config.js';
import Clients from './clients.js';
import SocketRtc from './on.js';

let io = initApp();
let clients = new Clients();

io.on(SOCKET_ON_SYS.CONNECTION, (socket) => {

  const { query } = socket.handshake;
  const { username, room } = query;
  let user = {
    id: socket.id,
    username,
    room
  };
  const addUserCode = clients.addUser(user);
  switch (addUserCode) {
    case ERR_CODE.FULL: {
      // 向客户端发送，房间已满员
      socket.emit(ERR_MSG.FULL);
      // 断开连接
      socket.disconnect();
    }
  }
  console.log(`用户${username}进入房间${room}`);

  socket.join(room);
  io.to(room).emit(SOCKET_ON_EMIT.SYS_USER_LIST, clients.getUserList(room));
  SocketRtc(socket);

  socket.on(SOCKET_ON_SYS.DISCONNECT, () => {
    clients.removeUser(user);

    io.to(room).emit(SOCKET_ON_EMIT.SYS_USER_LIST, clients.getUserList(room));
  })


})