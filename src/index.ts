//External modules 
import * as dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
dotenv.config();
//environment variables. 
if (!process.env.PORT) {
    process.exit(1)
}
const PORT: number = parseInt(process.env.PORT as string, 10)
const app = express()
//Configurartion 

//Server processing 