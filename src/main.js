
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { getRequest } from "./js/pixabay-api";
import { createMarkup } from "./js/render-functions";

const form = document.querySelector(`.submit-form`);
const list = document.querySelector(`.gallery`);
form.addEventListener(`submit`, searchRequest);


function searchRequest(evt) {
    evt.preventDefault();
    list.innerHTML = `<span class="loader"></span>`;
    const characteristics = evt.currentTarget.elements.search.value;
    getRequest(characteristics)
        .then(data => {
            if (data.hits.length === 0)
                 { iziToast.show({
                    message: '❌ Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    messageColor: 'red',
                    messageSize: '14px',
                    timeout: 2000,
                 });
                list.innerHTML = ``;
                return;}
            list.innerHTML = createMarkup(data.hits)
            initializeLightbox();
        })
        .catch(err => console.log(err))
    
}




function initializeLightbox() {
    const instance = new SimpleLightbox('.gallery a', {
        captionsDelay: 250,
        captionPosition: "bottom",
    });
    instance.refresh();
}