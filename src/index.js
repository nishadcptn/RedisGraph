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
  console.timeEnd();
})();
// CREATE USER
(async()=>{
  console.time();
  await redis_user.CreateUser(
    {
      accountId: 2,
      handle: 'safvan',
      isVerified: true,
      userName: 'safvan cp',
      status: 'new',
      profileImageUrl:null,
      joinedDate: '2022-11-05',
      geoLocation: null,
      private: false,
      socketStatus: 'ACTIVE'
  })
  console.timeEnd();
});

export default {
  redis_user,
  redis_group
}