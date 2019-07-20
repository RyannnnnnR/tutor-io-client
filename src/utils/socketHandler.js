import io from 'socket.io-client'
var socket

export function getConnection () {
  if (socket == null) {
    socket = io.connect('http://localhost:3000')
  }
  return socket
}
