const apiKey = '0FYIREHzdAWczdvrNCc-UNiYYlp2DuCFyAlV5pe2nTZ3foJuo6T0qdxO3DsERq6Bb6xi-buy25mAIvBVqhPx3cckIJ8Z8m3xIIzYf5zcvQ4DrycB2e5T1rjW2q4yX3Yx';

const Yelp = {
    searchYelp(term, location, sortBy) {
      return fetch(
        `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          }
        }
      )
  
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          if (jsonResponse.businesses) {
            return jsonResponse.businesses.map(((business) => {
              console.log(business);
              return {
                id: business,
                imageSrc: business.image_url,
                name: business.name,
                address: business.location.address1,
                city: business.location.city,
                state: business.location.state,
                zipCode: business.location.zip_code,
                category: business.categories[0].title,
                rating: business.rating,
                reviewCount: business.review_count,
              };
            }));
          }
        });
    }
  };
  
  export default Yelp;


