### DOCS FOR ESTABLISHMENTS

endpoint: `/search`

`'Content-type': 'application/json'`

Response: 200

```json
{
    "results_found":"50",
    "results_shown":"10",
    "results_start":"11",
    "salons":[
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
            "has_reservations":"no",
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
    ]
}
```

PARAMS:

| Parameter                |  Description                     | Parameter Type | Data Type |
| :----------------------- | -------------------------------: | -------------: | ----------:
| user-key (required)      | Secret key                       | Headers        | string    |
| location-id (required)   | location id                      | query          | string    |
| location-type (required) | city/zone                        | query          | string    |  
| q                        | search keyword                   | query          | string    |
| start                    | fetch results after offset       | query          | string    |
| count                    | max number of results to display | query          | string    |
| lat                      | latitude                         | query          | string    |
| lon                      | longitude                        | query          | string    |
| radius                   | search radius in metres          | query          | string    |
| category                 | Secret key                       | query          | string    |
| sort                     | cost,rating,distance             | query          | string    |
| order                    | asc/desc                         | query          | string    |
