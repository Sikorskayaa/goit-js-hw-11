 export function getRequest(characteristics) {

    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = `41768952-3eb5a1819d194e4ebd739434d`
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${characteristics}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })

}
