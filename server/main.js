import { SOCKET_ON_RTC, SOCKET_ON_SYS, SOCKET_ON_EMIT } from './enum';
import initApp from './config';
import Clients from './clients';

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
  clients.addUser(user);

  // TODO
})