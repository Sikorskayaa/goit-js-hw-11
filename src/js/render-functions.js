
export function createMarkup(arr) {
    return arr.map( ({webformatURL, largeImageURL, tags, likes, views, comments, downloads} ) => `<a class="gallery-link" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
    <div class="gallery-review">
    <div class="gallery-review-item"><b>Likes</b> <span>${likes}</span></div>
    <div class="gallery-review-item"><b>Views</b> <span>${views}</span></div>
    <div class="gallery-review-item"><b>Comments</b> <span>${comments}</span></div>
    <div class="gallery-review-item"><b>Downloads</b> <span>${downloads}</span></div>
    </div></a>
      `).join(``)
}