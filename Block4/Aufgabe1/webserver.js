import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) { // Diese Zeile einfach mal so hinnehmen, wird später erklärt
  const text = Deno.readTextFile(
    "C:/Users/vmadmin/Documents/M133/Block4/Aufgabe1/index.html",
  );
  text.then((content) => req.respond({ body: content }));
}
