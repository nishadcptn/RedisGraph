import { graph } from "../../config/index.js";

export async function CreateRequest(groupId, accountId) {
    try{
        const result = await graph.roQuery(
            `MATCH (u:USER { 
                accountId: ${accountId} 
            })-[m:MEMBER|REQUESTED|INVITED|OWNER]->(g:GROUP { 
                groupId: ${groupId} 
            }) RETURN m`
        );

        const existingRelation = result.data.map(item=> item.m.relationshipType)
        console.log(existingRelation);
        if( 
            result.data.length === 0 || 
            (!existingRelation.includes('MEMBER') &&
            !existingRelation.includes('REQUESTED') &&
            !existingRelation.includes('OWNER')) 
        ){
            let r = await graph.query(
                `MATCH (u:USER {
                    accountId: ${accountId}
                }),(g:GROUP {
                    groupId: ${groupId}
                }) CREATE (u)-[o:REQUESTED]->(g) RETURN o`
            );
            console.log(r);
        }
    }catch(err){
        console.log(err);
    }
};

export const DeleteRequest = async (groupId, accountId) =>{
    try{
        await graph.query(
            `MATCH (u:USER { 
                accountId: ${accountId} 
            })-[m:REQUESTED]->(g:GROUP { 
                groupId: ${groupId} 
            }) DELETE m`
        );
    }catch(err){
        console.log(err);
    }
};