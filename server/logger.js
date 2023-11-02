import log4js from "log4js"

log4js.configure({
  appenders: [{
    type: 'file',
    filename: 'socket.log',
    layout: {
      type: 'pattern',
      pattern: '%d{yyyy-MM-dd hh:mm:ss} %p %c - %m'
    }
  }],
  categories: {
    default: {
      appenders: ['file'],
      level: 'info'
    }
  }
})

const logger = log4js.getLogger()
export default logger