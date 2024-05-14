
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import {request} from "./js/pixabay-api"
import { createMarkup } from "./js/render-functions";

const form = document.querySelector('.submit-form');
const list = document.querySelector('.gallery');

form.addEventListener('submit', onSubmit);


function onSubmit(evt) {
    evt.preventDefault();
    
    list.innerHTML = `<span class="loader"></span>`;
    const inputValue = evt.currentTarget.elements.search.value;
    if(inputValue.length === 0){
        return
    }

    request(inputValue)
        .then(data => {
            if (data.hits.length === 0){
                 iziToast.show({
                    message: ' Sorry, there are no images matching your search query. Please try again!',
                    color: '#EF4040',
                    position: 'topRight',
                    messageColor: 'white',
                    messageSize: '5px',
                    timeout: 2000,
                    padding: '20px',
                    gap: '8px',
                    borderRadius: '4px'
                 });
                list.innerHTML = ``;
                return;
            }
            list.innerHTML = createMarkup(data.hits)
            init();
        })
        .catch(err => console.log(err))
    
}




function init() {
    const instance = new SimpleLightbox('.gallery a', {
        captionsDelay: 250,
        captionPosition: "bottom",
    });
    instance.refresh();
}




