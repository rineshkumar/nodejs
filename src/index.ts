//External modules 
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import { ESRCH } from 'node:constants';
dotenv.config();
//environment variables. 
if (!process.env.PORT) {
    process.exit(1)
}
const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()
//Configurartion 
//Adding middle wares 
app.use(helmet())
app.use(cors())
app.use(express.json())
//Server tasks 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

