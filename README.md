# Hapi Routing

wrapper for router Hapi.js.

## how to use 
```js
const router = new HapiRouter();
// OR
const router = createHapiRouter();
router.get("/", (req, h) => h.response({hello: "world"}), options);

// apply to hapi server
server.route(router.getRoutes());
```