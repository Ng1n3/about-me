import express, { Application, Request, Response } from 'express'
import 'dotenv/config'

const app : Application = express()
const PORT = process.env.PORT || 5000

app.get('/', (req: Request, res: Response ) => {
  res.send({message: "Server is up an running"})
})

app.get('/api/v1/about', (req: Request, res:Response) => {
  res.send({email: "olumuyiwa@gmail.com", current_datetime: new Date(), github_url: "https://github.com/Ng1n3/"})
})

app.listen(PORT, () => {
  console.log(`Server is currently listening on port ${PORT}`);
})

