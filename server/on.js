import { SOCKET_ON_RTC, SOCKET_ON_EMIT } from "./enum.js";
import logger from './logger.js';

export default function SocketRtc(socket) {
  socket.on(SOCKET_ON_RTC.CONDIDATE, (room, candidate) => {
    socket.to(room).emit(SOCKET_ON_RTC.CONDIDATE, candidate);
  })

  socket.on(SOCKET_ON_RTC.OFFER, (room, offer) => {
    socket.to(room).emit(SOCKET_ON_RTC.OFFER, offer);
  })

  socket.on(SOCKET_ON_RTC.ANSWER, (room, answer) => {
    socket.to(room).emit(SOCKET_ON_RTC.ANSWER, answer);
  })

  socket.on(SOCKET_ON_EMIT.MESSAGE, (room, data) => {
    logger.debug(`收到消息: ${data}, 来自于房间: ${room}`)
    socket.to(room).emit(SOCKET_ON_EMIT.MESSAGE, room, data)
  })

  socket.on(SOCKET_ON_EMIT.LEAVE, (room, username) => {
    socket.leave(room)
    logger.debug(`离开房间: ${username}, 来自于房间: ${room}`)
    socket.emit(SOCKET_ON_EMIT.LEAVE, room, username)
  })
}