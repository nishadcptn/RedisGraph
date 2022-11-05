import { graph } from "../../config/index.js";

export default async function (userInfo) {
    try{
        const result = await graph.roQuery(
            `MATCH (u:USER { accountId: ${userInfo.accountId} }) RETURN u`
        );
        if(result.data.length === 0){
            await graph.query(
                `CREATE (:USER {
                    accountId: ${userInfo.accountId},
                    handle: '${userInfo.handle}',
                    isVerified: ${userInfo.isVerified},
                    name: '${userInfo.userName}',
                    status: '${userInfo.status}',
                    profileImageUrl: '${userInfo.profileImageUrl}',
                    joinedDate: '${userInfo.joinedDate}',
                    geoLocation: '${userInfo.geoLocation}',
                    private: ${userInfo.private},
                    socketStatus: '${userInfo.socketStatus}'
                })`
            );
            await graph.query(
                `CREATE (u:USER {
                    accountId: ${userInfo.accountId}
                })-[f:FOLLOWING]->(u)`
            );
        }else{
            await graph.query(
                `MATCH (u:USER {
                     accountId: ${userInfo.accountId} 
                }) SET 
                    u.accountId = ${userInfo.accountId},
                    u.handle = '${userInfo.handle}',
                    u.isVerified = ${userInfo.isVerified},
                    u.name = '${userInfo.userName}',
                    u.status = '${userInfo.status}',
                    u.profileImageUrl = '${userInfo.profileImageUrl}',
                    u.joinedDate = '${userInfo.joinedDate}',
                    u.geoLocation = '${userInfo.geoLocation}',
                    u.private = ${userInfo.private},
                    u.socketStatus = '${userInfo.socketStatus}'`
            );
        }
    }catch(err){
        console.log(err);
    }
};