import { Application, Router } from "https://deno.land/x/oak@v6.3.1/mod.ts";

const app = new Application();
const router = new Router();
router
  .get("/", (context) => {
    context.cookies.set(
      "artist",
      "RJD2",
      { maxAge: 60 * 1000 },
    );
    context.cookies.set(
      "album",
      "Deadringer",
      { maxAge: 60 * 1000 },
    );
    context.cookies.set(
      "song",
      "Ghostwriter",
      { maxAge: 60 * 1000 },
    );
    context.response.body = `<html><body>
  cookie has been set <a href="second">Go to other page</a>
  </body></html>`;
  })
  .get("/second", (context) => {
    context.cookies.forEach(function (key, value) {
      context.cookies.delete(key);
    });
    
    context.response.body = `<html><body>
    cookies has been deleted
    </body></html>`;
  });

app.use(router.routes());
app.listen({ port: 8000 });
