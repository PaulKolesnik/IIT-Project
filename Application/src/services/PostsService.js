export const BASE_URL = "http://localhost:4000"
const header = new Headers({
    "Access-Control-Allow-Origin": "*"
});


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

};

export const AddPost = (sender, message, imageUrl) => {
    const post = {
        sender,
        message,
        imageUrl
    }
    return fetch(BASE_URL + `/post`, {
            method: "POST",
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				...post,
			}),
        })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
};