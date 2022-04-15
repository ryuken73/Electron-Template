const process = require('process');
const fs = require('fs');
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  origins: ['*'],
});

const server = restify.createServer();
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.queryParser());
// server.use(restify.plugins.bodyParser());
server.pre(restify.plugins.pre.context());

server.get('/info', (req, res) => {
  console.log('received req');
  res.send(200, 'ok');
});

server.post('/sendFile/:fname', (req, res) => {
  const wStream = fs.createWriteStream(req.params.fname);
  console.log(`save file:${req.params.fname}`)
  req.pipe(wStream);
  wStream.on('finish', () => {
    console.log('finish');
    res.send('done');
  })
  wStream.on('close', () => {
    console.log('close');
  });

});

server.listen(7000, () => {
  console.log(`listening ${server.name}: ${server.url}`);
});
