### SCHEMA

Establishment Schema:

```json
{
    "id":"001",
    "name":"Bronx",
    "url":"www.bronx.com",
    "location":{
        "address":"blores",
        "locality":"Indiranagar",
        "city":"Bangalore",
        "latitude":"25",
        "longitude":"25",
        "zipcode":"56008",
        "country_id":"001",
    },
    "password_hash":"",
    "password_salt":"",
    "phone_no":"08024450544",
    "mobile_no":"9554334332",
    "average_cost_men":"",
    "average_cost_women":"",
    "currency":"Rs",
    "thumb":"url_thumbnail",
    "featured_image":"feat_image_url",
    "photos_url":"photos_url",
    "services_url":"services_url",
    "user_rating":{
        "aggregate_rating": "3.7",
        "rating_text": "Very Good",
        "rating_color": "5BA829",
        "votes": "1046"
    },
    "service_women":"yes",
    "service_men":"yes",
    "is_open_now":"yes",
    "photos":[
        {
            "id":"",
            "url":"",
            "thumb_url":"",
            "user":{
                "name":"",
                "swoosh_handle":"",
                "swoosh_level":"",
                "profile_url":""
            },
            "caption":"",
            "width":"",
            "height":"",
        }
    ],
    "all_reviews_count":"1",
    "all_reviews":[
        {
            "rating":"5",
            "review_text":"",
            "id": "",
            "rating_text":"",
            "timestamp":"",
            "user":{
                "name":"",
                "swoosh_handle":"",
                "swoosh_level":"",
                "profile_url":""
            }

        }
    ]
}
```

Users schema:

```json

{
    "id":"",
    "name":"",
    "email":"",
    "phone":"",
    "swoosh_handle":"",
    "swoosh_level":"",
    "profile_url":"",
    "thumbnail":"",
    "reviews":[],
    "comments":[],
    "bookings":[],
    "favorites":[],
    "photos":[],
    "password_hash":"",
    "password_salt":"",
    "created_date":""
}

```