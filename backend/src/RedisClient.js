import Redis from 'redis'

const regisPort = 6379

const redisClient = Redis.createClient(regisPort, "redis")

export default redisClient;