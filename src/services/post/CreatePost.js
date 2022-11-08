import { graph } from "../../config/index.js";

export  const CreatePost = async(postInfo) => {
    // try{
        const result = await graph.roQuery(
            `MATCH (p:POST { id: '${postInfo.id}' }) RETURN p`
        );

        if(result.data.length === 0){
            await graph.query(
                `CREATE (:POST {
                    id: '${postInfo.id}',
                    post_text: '${postInfo.post_text}',
                    preview_text: '${postInfo.preview_text}',
                    posted_at: '${postInfo.posted_at}',
                    poster_id: ${postInfo.accountId},
                    activity_status: '${postInfo.activity_status}',
                    app_id: ${postInfo.app_id},
                    post_type: '${postInfo.post_type}',
                    reshared: ${postInfo.reshared},
                    ownreshare: ${postInfo.ownreshare},
                    is_group_post: ${postInfo.is_group_post},
                    group_id: ${postInfo.group_id},
                    group_name: '${postInfo.group_name}',
                    group_image: '${postInfo.group_image}',
                    list_group_post: ${postInfo.list_group_post},
                    highlight_id: '${postInfo.highlight_id}',
                    is_highlighted: ${postInfo.is_highlighted},
                    highlight_title: '${postInfo.highlight_title}',
                    highlight_count: ${postInfo.highlight_count},
                    wall_card_text: '${postInfo.wall_card_text}',
                    highlight_type: '${postInfo.highlight_type}',
                    mentionList: '${JSON.stringify(postInfo.mentionList)}',
                    media_links: '${JSON.stringify(postInfo.media_links)}',
                    original_post: ${postInfo.original_post},
                    private: ${postInfo.private},
                    is_badge: ${postInfo.is_badge},
                    add_cta_sponsor: ${postInfo.add_cta_sponsor},
                    button_title: '${postInfo.button_title}',
                    sponsor_url: '${postInfo.sponsor_url}',
                    reposted_id: '${postInfo.reposted_id}',
                    reposted_account_id: '${postInfo.reposted_account_id}',
                    visibility: '${postInfo.visibility}'
                })`
            );
            if(postInfo.mentionList.length > 0 && !postInfo.reposted_id){
                for(const item of postInfo.mentionList){
                    await graph.query(
                        `MATCH (u:USER {
                            accountId: ${item.accountId}
                        }),(p:POST {
                            id: '${postInfo.id}'
                        }) CREATE (u)-[o:MENTIONED]->(p)`
                    );
                }
            }

            if(postInfo.media_links.length > 0){
                for(const item of postInfo.mentionList){ 
                    await graph.query(
                        `CREATE (:MEDIA {
                            id: '${postInfo.id}',
                            url: '${item.url}',
                            type: '${item.type}'
                        })`
                    );
                }

                await graph.query(
                    `MATCH (m:MEDIA {
                        id: '${postInfo.id}'
                    }),(p:POST {
                        id: '${postInfo.id}'
                    }) CREATE (m)-[o:MEDIA_LINKS]->(p)`
                );
            }
            if(postInfo.is_group_post && postInfo.group_id && !postInfo.reposted_id){
                await graph.query(
                    `MATCH (g:GROUP {
                        groupId: ${postInfo.group_id}
                    }),(p:POST {
                        id: '${postInfo.id}'
                    }) CREATE (g)-[o:POSTED_IN_GROUP]->(p)`
                );   
            }
            if(postInfo.reposted_id){
                await graph.query(
                    `MATCH (u:USER {
                        accountId: ${postInfo.accountId}
                    }),(p:POST {
                        id: '${postInfo.id}'
                    }) CREATE (u)-[o:REPOSTED]->(p)`
                );
            }
            await graph.query(
                `MATCH (u:USER {
                    accountId: ${postInfo.accountId}
                }),(p:POST {
                    id: '${postInfo.id}'
                }) CREATE (u)-[o:POSTED]->(p)`
            );
        }
    // }catch(err){
    //     console.log(err);
    // }
};