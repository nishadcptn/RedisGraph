import redis_user from './services/user/index.js'

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
})()

export default {
  redis_user
}