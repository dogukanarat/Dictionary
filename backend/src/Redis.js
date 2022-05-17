import { createClient } from 'redis'

let redisClient = createClient({ legacyMode: true , url:"redis://redis:6379"});

redisClient.on("error", (error) => {
    console.error(error);
});

redisClient.on('connect', () => {
    console.log('Connected to Redis');
});

redisClient.connect().catch((error) => {
    console.error(error);
});

export default redisClient;