import { graph } from "../../config/index.js";

export default async function (groupInfo) {
    try{
        const result = await graph.roQuery(
            `MATCH (g:GROUP { groupId: ${groupInfo.groupId} }) RETURN g`
        );
        if(result.data.length === 0){
            await graph.query(
                `CREATE (:GROUP {
                    groupId: ${groupInfo.groupId},
                    groupTitle: '${groupInfo.groupTitle}',
                    groupSubTitle: '${groupInfo.groupSubTitle}',
                    groupTagline: '${groupInfo.groupTagline}',
                    groupCode: '${groupInfo.groupCode}',
                    groupImage: '${groupInfo.groupImage}',
                    accountId: ${groupInfo.accountId},
                    groupType: '${groupInfo.groupType}'
                })`
            );
            await graph.query(
                `MATCH (u:USER {
                    accountId: ${groupInfo.accountId}
                }),(g:GROUP {
                    groupId: ${groupInfo.groupId}
                }) CREATE (u)-[o:OWNER]->(g)`
            );
        }else{
            await graph.query(
                `MATCH (g:GROUP {
                    groupId: ${groupInfo.groupId} 
                }) SET 
                    g.groupId = ${groupInfo.groupId},
                    g.groupTitle = '${groupInfo.groupTitle}',
                    g.groupSubTitle = '${groupInfo.groupSubTitle}',
                    g.groupTagline = '${groupInfo.groupTagline}',
                    g.groupCode = '${groupInfo.groupCode}',
                    g.groupImage = '${groupInfo.groupImage}',
                    g.accountId = ${groupInfo.accountId},
                    g.groupType = '${groupInfo.groupType}'
            `);
        }
    }catch(err){
        console.log(err);
    }
};