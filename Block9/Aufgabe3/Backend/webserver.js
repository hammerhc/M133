import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";

const app = new Application();
const router = new Router();
const session = new Session({ framework: "oak" });
await session.init();

app.use(session.use()(session));

var count = 0;

router
  .get("/api/count", (context) => {
    context.response.status = 200;
    context.response.body = {result: count};
  })
  .post("/api/increment", async (context) => {
    console.log("test");

    if (await context.state.session.get("number") == undefined) {
      await context.state.session.set("number", 0);
      count = 0;
    } else {
      count = await context.state.session.get("number");
      count++;
      await context.state.session.set("number", count);
    }

    context.response.status = 200;
    context.response.body = {message: "Success"};
  });

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/frontend`,
    index: "index.html",
  });
});

app.listen({ port: 8000 });
