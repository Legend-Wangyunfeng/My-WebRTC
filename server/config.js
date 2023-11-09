import express from "express";
import http from "http";
import { Server } from "socket.io";

export default function initApp() {
  const app = express();
  const httpServer = http.createServer(app);
  httpServer.listen(80);
  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
    path: "/rtc"
  });
  return io;
}