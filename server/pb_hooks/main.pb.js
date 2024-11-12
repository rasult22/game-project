/// <reference path="../pb_data/types.d.ts" />
// fires only for "users" and "articles" collections
onRecordAfterUpdateRequest((e) => {
    $http.send({
      url:     "https://api.github.com/repos/rasult22/game-project/actions/workflows/s3.yml/dispatches",
      method:  "POST",
      body:    JSON.stringify({ref: 'main'}), // ex. JSON.stringify({"test": 123}) or new FormData()
      headers: {
        "content-type": "application/json",
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer "
      },
    })
}, "games_posts")
// fires only for "users" and "articles" collections
onRecordAfterCreateRequest((e) => {
    $http.send({
      url:     "https://api.github.com/repos/rasult22/game-project/actions/workflows/s3.yml/dispatches",
      method:  "POST",
      body:    JSON.stringify({ref: 'main'}), // ex. JSON.stringify({"test": 123}) or new FormData()
      headers: {
        "content-type": "application/json",
        "Accept": "application/vnd.github+json",
        "Authorization": "Bearer "
      },
    })
}, "games_posts")
