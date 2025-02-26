import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors'

const app = new Hono();

app.use('/*', cors())
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

// app.use('/api/v1/blog/*', async(c , next)=>{
//   const header = c.req.header("Authorization")||"";

//   const token = header.split(" ")[1];

//   const response = await verify(token, c.env.JWT_SECRET)
//   if(response.id){
//     next()
//   }else {
//     c.status(403)
//     return c.json({"error":"unauthorized"})
//   }
// })



export default app
