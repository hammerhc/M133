import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) { // Diese Zeile einfach mal so hinnehmen, wird später erklärt
    if (req.url == "/seite1") {
        const text = Deno.readTextFile("C:/Users/vmadmin/Documents/M133/Block4/Aufgabe2/seite1.html");
        text.then((content) => req.respond({ body: content }));
    } else if (req.url == "/seite2") {
        const text = Deno.readTextFile("C:/Users/vmadmin/Documents/M133/Block4/Aufgabe2/seite2.html");
        text.then((content) => req.respond({ body: content }));
    } else {
        const text = Deno.readTextFile("C:/Users/vmadmin/Documents/M133/Block4/Aufgabe2/index.html");
        text.then((content) => req.respond({ body: content }));  
    }
}