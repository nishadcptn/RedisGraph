1 - *CREATE UPDATE USER - [05-11-2022]*
  --USER - USER CONNECTION 
    EG :-
    ```await redis_user.CreateUser({
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
    })```

2 - *CREATE GROUP - [07-11-2022]*
  --GROUP - USER CONNECTION 
    EG :-
    ```await redis_group.CreateGroup({
        groupId: 22,
        groupTitle: 'Redis',
        groupSubTitle: '',
        groupTagline: '',
        groupCode: '',
        groupImage: '',
        accountId: 1,
        groupType: ''
      })```
3 - *CREATE POST - []*
  --USER - POST CONNECTION 
  --GROUP - POST CONNECTION 

