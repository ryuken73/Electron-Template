const dev =  {
  SOCKET_SERVER_URL: 'http://localhost:9009',
  EVENT_NEW_MESSAGES: 'post:newMessages',
}

const prd = {
  ...dev,
}

export default process.env.NODE_ENV === 'development' ? dev:prd;
