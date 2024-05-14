 export function request(inputValue) {

    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '43859237-c6386bdcccc66f068a9509366'
    return fetch(`${BASE_URL}?key=${API_KEY}&q=${inputValue}&image_type=photo&orientation=horizontal&safesearch=true`)
        .then(resp => {
            if (!resp.ok) {
            throw new Error(resp.statusText)
            }
            return resp.json()
    })

}
