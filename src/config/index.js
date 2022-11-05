import { createClient } from 'redis';
import { Graph } from 'redis';
import dotenv from "dotenv";

dotenv.config();

const client = createClient({
    url: process.env.REDISURL
});

await client.connect();


export const graph = new Graph(client, 'social_dev');
export default client;