    // 'social_dev',
    //  'redis-11392.c301.ap-south-1-1.ec2.cloud.redislabs.com',
    //  1139,
    // {
    //     password: 'ZWXUAgFKBV9xl8Zww2tarLug70atU0nz',
    //     username: 'default',
    //     db: 'graph-dev',
    // }

    import { createClient } from 'redis';
    import { Graph } from 'redis';

    const client = createClient({
        url: 'redis://default:ZWXUAgFKBV9xl8Zww2tarLug70atU0nz@redis-11392.c301.ap-south-1-1.ec2.cloud.redislabs.com:11392'
    });
    
    await client.connect();
    

    export const graph = new Graph(client, 'social_dev');
    export default client;