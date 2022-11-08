import { graph } from "../../config/index.js";

export default async function (followingUser, user) {
    try{
        const result = await graph.roQuery(
            `MATCH (u1:USER { accountId: ${followingUser} })-[f:FOLLOWING]->(u2:USER {accountId: ${user}}) RETURN f`
        );

        if(result.data.length === 0){
            await graph.query(
                `MATCH (u1:USER {
                    accountId: ${followingUser}
                }),(u2:USER {
                    accountId: ${user}
                }) CREATE (u1)-[f:FOLLOWING]->(u2)`
            );
        }
    }catch(err){
        console.log(err);
    }
};