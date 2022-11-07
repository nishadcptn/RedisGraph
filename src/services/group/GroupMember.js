import { graph } from "../../config/index.js";

export async function AddMember(groupId, accountId) {
    try{
        const result = await graph.roQuery(
            `MATCH (u:USER { 
                accountId: ${accountId} 
            })-[m:MEMBER|REQUESTED|INVITED|OWNER]->(g:GROUP { 
                groupId: ${groupId} 
            }) RETURN m`
        );
        
        if( 
            result.data.length === 0 || 
            !['MEMBER','OWNER'].includes(result.data[0].m.relationshipType)
        ){
            let r = await graph.query(
                `MATCH (u:USER {
                    accountId: ${accountId}
                }),(g:GROUP {
                    groupId: ${groupId}
                }) CREATE (u)-[o:MEMBER]->(g) RETURN o`
            );
            console.log(r);
        }
    }catch(err){
        console.log(err);
    }
};

export const RemoveMember = async (groupId, accountId) =>{
    try{
        await graph.query(
            `MATCH (u:USER { 
                accountId: ${accountId} 
            })-[m:MEMBER|OWNER]->(g:GROUP { 
                groupId: ${groupId} 
            }) DELETE m`
        );
    }catch(err){
        console.log(err);
    }
};