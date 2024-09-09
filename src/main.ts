import * as BunnySDK from "https://esm.sh/@bunny.net/edgescript-sdk@0.10.0";

import { init } from "./routes/mod.ts";
import { app } from "./infrastructure/mod.ts";
import { petStore } from "./domain/pets.ts";

console.log("Initialize the routes");
init({ store: petStore })(app);

const listener = BunnySDK.net.tcp.unstable_new();
console.log("Listening on: ", BunnySDK.net.tcp.toString(listener));
BunnySDK.net.http.serve(
  (req: Request): Response | Promise<Response> => {
    console.log(`[INFO]: ${req.method} - ${req.url}`);
    return app.fetch(req);
  },
);
