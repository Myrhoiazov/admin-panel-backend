import express from 'express';
import path from 'path';
import { createServer } from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';
import errorMiddleware from './middlewares/middlewares.Error';
import { logger } from './logger';
import { env } from 'process';

dotenv.config();

const app = express();
const server = createServer(app);

app.use(morgan('combined', {
    stream: {
        write: message => logger.info(message.trim())
    }
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({
    origin: env.CLIENT_URL,
    credentials: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use(compression());

app.use('/api/v1', routes());
app.use(errorMiddleware);

export default server;