import redis_user from './services/user/index.js';
import redis_group from './services/group/index.js';

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
})();
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
})();

export default {
  redis_user,
  redis_group
}