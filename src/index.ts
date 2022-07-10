import http from "http";
import { inject } from 'light-my-request';

function dispatch(req: http.IncomingMessage, res: http.ServerResponse) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    data: 'Hello World!'
  }));
}

(async function() {
  const response = await inject(dispatch, {
    url: "/",
  });
})()
