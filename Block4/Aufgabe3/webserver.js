import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";
const app = new Application();
const router = new Router();
router
  .get("/", (context) => {
    return send(context, "index.html");
  })
  .get("/seite1", (context) => {
    return send(context, "seite1.html");
  })
  .get("/seite2", (context) => {
    return send(context, "seite2.html");
  });
app.use(router.routes());
app.listen({ port: 8000 });
