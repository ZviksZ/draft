import { Context } from "koa";

const Koa = require("koa");
const next = require("next");
const Router = require("@koa/router");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/111", async (ctx: Context) => {
    ctx.body = {
      data: "1",
    };
  });

  router.all("(.*)", async (ctx: Context) => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
