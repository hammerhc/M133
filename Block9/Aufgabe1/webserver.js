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
    var cookies = "";
    context.cookies.forEach(function (key, value) {
      cookies += `<li>Key: ${key}, Value: ${value}</li>`;
    });
    context.response.body = `<html><body><ul>${cookies}</ul></body></html>`;
  });

app.use(router.routes());
app.listen({ port: 8000 });
