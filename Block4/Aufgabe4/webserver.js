import {
  Application,
  Router,
  send,
} from "https://deno.land/x/oak@v6.3.1/mod.ts";
const app = new Application();
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = readImages();
  })
  .get("/Images/:img", (context) => {
    return send(context, "Images/" + context.params.img);
  });
app.use(router.routes());
app.listen({ port: 8000 });

async function readImages() {
  var html = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title></head><body><main><section><h1>Hello World!</h1></section><section>";
  for await (const dirEntry of Deno.readDir("Images")) {
    html += "<img src='Images/" + dirEntry.name + "'>";
  }
  html += "</section></main></body></html>"
  return html;
}