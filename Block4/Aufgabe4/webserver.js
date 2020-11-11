import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";
const app = new Application();
const router = new Router();
router
  .get("/", (context) => {
    var images = "";
  
    for (const dirEntry of Deno.readDirSync("Images")) {
      images += "<img src='Images/" + dirEntry.name + "'>";
    }
  
    context.response.body = `
    <!DOCTYPE html>
      <html lang='en'>
        <body>
          ${images}
        </body>
      </html>
    `;
  })
  .get("/Images/:img", (context) => {
    return send(context, "Images/" + context.params.img);
  });
app.use(router.routes());
app.listen({ port: 8000 });