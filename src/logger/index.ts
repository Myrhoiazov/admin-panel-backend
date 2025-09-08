import { createLogger, transports, format } from 'winston';
import path from 'path';

const logFormat = format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ level, message, timestamp }) => `${timestamp} [${level}]: ${message}`)
);

export const logger = createLogger({
    level: 'info',
    format: logFormat,
    transports: [
        new transports.File({ filename: path.join(__dirname, '..', '/logs', 'error.log'), level: 'error' }),
        new transports.File({ filename: path.join(__dirname, '..', '/logs', 'combined.log') }),
    ],
});

if (process.env.NODE_ENV !== 'production') {
    logger.add(new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple()
        ),
    }));
}

