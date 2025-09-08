import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("✅ Connected to the database");
    } catch (error) {
        console.error("❌ Database connection failed:", error);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection();

export default prisma;