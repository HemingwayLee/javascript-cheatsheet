var gToken = '_INIT_';

self.addEventListener('fetch', function(event) {
  console.log(event.request);
  console.log(event.request.headers);
  console.log('!!now fetch!!');

  // TODO: not working
  // self.clients.matchAll().then(clients => {
  //   console.log("fetchfetchfetch");
  //   clients.forEach(client => {
  //     console.log(client)
  //     console.log("FFFFFFF")
  //     client.postMessage({msg: 'Hello from SW'})
  //   });
  // })
});

self.addEventListener('message', event => {
  console.log(`!!! msg ${event.data} !!!`);
  console.log(`the token is ${gToken}`);
  gToken = event.data;

  console.log(event);

  // TODO: not working
  // event.source.postMessage("back2you");

  // self.postMessage("back2you");
  
  // event.waitUntil(async function() {
  //   // if (!event.clientId) {
  //   //   console.log("!!! no client id !!!");
  //   //   return;
  //   // }
    
  //   const client = await clients.get(event.source.id);
  //   if (!client) {
  //     console.log("!!! no client !!!");
  //     return;
  //   }

  //   console.log("!!! POSTBACK !!!");
  //   client.postMessage({
  //     msg: "Hey I just got a msg from you",
  //   });
  // }());

  // self.clients.matchAll().then(clients => {
  //   console.log("inininin");
  //   clients.forEach(client => {
  //     console.log(client)
  //     console.log("ININININI")
  //     client.postMessage({msg: 'Hello from SW'})
  //   });
  // })
});

