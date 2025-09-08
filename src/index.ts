import config from './config/config';
import server from './app';
import prisma from './prisma-client';

const start = async () => {
    try {
        server.listen(config.port, (error?: Error) => {
            if (error) {
                console.error('Error starting server:', error);
                return;
            }
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (e) {
        console.error('error message:', e instanceof Error ? e.message : e);
        prisma.$disconnect();
        process.exit(1);
    }
};

start();


