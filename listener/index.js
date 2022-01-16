const WebSocket = require("ws")

let encounterPlus = new WebSocket("ws://localhost:8080/client")

encounterPlus.onopen = function(e) {
    console.log("[open] Connection established");
    console.log("Sending to server");
    encounterPlus.send("My name is John");
  };
  
  encounterPlus.onmessage = function(event) {
    console.log(`[message] Data received from server: ${event.data}`);
  };
  
  encounterPlus.onclose = function(event) {
    if (event.wasClean) {
        console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      console.log('[close] Connection died');
    }
  };
  
  encounterPlus.onerror = function(error) {
    console.log(`[error] ${error.message}`);
  };
