import redis_user from './services/user/index.js';
import redis_group from './services/group/index.js';
import redis_post from './services/post/index.js';
// CREATE GROUP
(async()=>{
  console.time();
  await redis_group.CreateGroup(
    {
      groupId: 22,
      groupTitle: 'Redis',
      groupSubTitle: '',
      groupTagline: '',
      groupCode: '',
      groupImage: '',
      accountId: 1,
      groupType: ''
  })
  // await redis_group.AddMember(22,2);
  // await redis_group.CreateInvite(22,2);
  // await redis_group.CreateRequest(22,2);


  // await redis_group.RemoveMember(22,2);
  // await redis_group.DeleteInvite(22,2);
  // await redis_group.DeleteRequest(22,2);
  console.timeEnd();
});
// CREATE USER
(async()=>{
  await redis_user.CreateUser(
    {
      accountId: 2,
      handle: 'Adarsh',
      isVerified: true,
      userName: 'Adarsh',
      status: 'new',
      profileImageUrl:null,
      joinedDate: '2022-11-07',
      geoLocation: null,
      private: false,
      socketStatus: 'ACTIVE'
  })
});
//CREATE POST
(async ()=> {
  await redis_post.CreatePost({
    id: '33b17af8-e320-4a37-88f0-7b33dd16c754',
    post_text: 'Post Create X4',
    preview_text: 'Post Create X4',
    posted_at: '2022-11-08T09:05:22.742Z',
    accountId: 1,
    activity_status: '',
    app_id: 123,
    post_type: 'post',
    reshared: false,
    ownreshare: false,
    is_group_post: true,
    group_id: 22,
    group_name: 'Redis',
    group_image: '',
    list_group_post: false,
    highlight_id: '',
    is_highlighted: false,
    highlight_title: '',
    highlight_count: 0,
    wall_card_text: '',
    highlight_type: '',
    mentionList: [{ accountId:1 },{ accountId:2 }],
    media_links: [{url:'',type:''}],
    original_post: true,
    private: false,
    is_badge: false,
    add_cta_sponsor: false,
    button_title: '',
    sponsor_url: '',
    reposted_id: '',
    reposted_account_id: '',
    visibility: 'everyone'
  })
});
//FOLLOW USER

(async()=> {
  await redis_user.FollowUser(1,2);
  await redis_user.FollowUser(2,1);
  // await redis_user.UnfollowUser(1,2);
});
export default {
  redis_user,
  redis_group
}