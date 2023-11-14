import { io } from "socket.io-client";
import { SOCKET_ON_RTC, SOCKET_ON_SYS, SOCKET_EMIT } from "./enum.js";
import { rtcConfig } from "./constants.js";

//开始监听RTC连接
const initSocket = ({ username, room, remoteVideoRef, localStream }) => {
  let localPc;
  const socket = io("http://localhost:3333", {
    path: "/rtc",
    query: {
      username,
      room
    }
  }).connect();

  // 当有人加入房间时候触发
  socket.on(SOCKET_ON_SYS.SYS_USER_LIST, (res) => {
    if(res.length < 2) {
      let video = remoteVideoRef.value.$el;
      video.srcObject = null;
      return;
    }

    // TODO here
    else {
      sendOffer();
    }
  })

  socket.on(SOCKET_ON_SYS.OFFER, (offer) => {
    console.log("接收到offer", offer);
    sendAnswer(offer);
  })

  socket.on(SOCKET_ON_SYS.ANSWER, async (answer) => {
    console.log("接收到answer", answer);
    await localPc.setRemoteDescription(answer);
  })

  socket.on(SOCKET_ON_RTC.CANDIDATE, async ({pc, candidate}) => {
    console.log("接收到candidate", candidate);
    if(!remoteVideoRef.value) return;
    let video = remoteVideoRef.value.$el;
    localPc.ontrack = (event) => {
      video.srcObject = event.streams[0];
      video.oncanPlay = () => video.play();
    }
  })
}