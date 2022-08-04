export const BASE_URL = "http://localhost:4000"
const header = new Headers({ "Access-Control-Allow-Origin": "*" });


export const GetAllPosts = () => {

    return fetch(BASE_URL + `/post`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => {
            // *** Check for HTTP failure
            if (!response.ok) {
                throw new Error("HTTP status " + response.status);
            }
            // *** Read and parse the JSON
            return response.json();
        })

        .catch((error) => {
            console.log(error)
        });


    // .then(posts => {
    //     console.log(posts.text())
    //     return parseJSON(posts.text())
    // })
    // .catch(err => console.log(err))
};

