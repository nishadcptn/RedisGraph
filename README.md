1 - CREATE UPDATE USER - [05-11-2022]
  --USER - USER CONNECTION [-]
    EG :-
    `await redis_user.CreateUser({
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
    })`

2 - CREATE GROUP - [07-11-2022]
  --GROUP - USER CONNECTION [-]
    EG :-
    `await redis_group.CreateGroup({
        groupId: 22,
        groupTitle: 'Redis',
        groupSubTitle: '',
        groupTagline: '',
        groupCode: '',
        groupImage: '',
        accountId: 1,
        groupType: ''
      })`
3 - CREATE POST - [08-11-2022]
  --USER - POST CONNECTION [-]
  --GROUP - POST CONNECTION [-]
  --POST - MENTIONED USER CONNECTION [-] 
  --POST - MEDIA CONNECTION [-]

  EG :-
  `await redis_post.CreatePost({
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
      })`
  
4 - USER FOLLOW - [08-11-2022]
  --USER - USER CONNECTION [-]
  EG :- 
  `await redis_user.FollowUser(1,2);`

5 - USER UNFOLLOW - [08-11-2022]
  --REMOVE USER - USER CONNECTION [-]
  EG :- 
  `await redis_user.UnfollowUser(1,2);`