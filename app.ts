import { Application } from "https://deno.land/x/oak/mod.ts";
import todoRoutes from './routes/todos.ts';

const app = new Application();

app.use(async (ctx, next) => {
    console.log('Middleware');
    await next();
})

app.use(todoRoutes.routes());
app.use(todoRoutes.allowedMethods());

await app.listen({ port: 3000 });

// import { serve } from "https://deno.land/std@0.75.0/http/server.ts";

// const server = serve({port: 3000});

// for await (const req of server) {
//     req.respond({ body: 'howdy worldy' });
// }

// const text = 'some text that should beee stored in a file';

// const encoder = new TextEncoder();
// const data = encoder.encode(text);

// try {
//     await Deno.writeFile('message.txt', data);
// } catch (err) {
//     console.log(err);
// }