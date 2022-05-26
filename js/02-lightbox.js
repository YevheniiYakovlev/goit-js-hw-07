//Сделай такую же галерею как в первом задании, но используя библиотеку 
//SimpleLightbox, которая возьмет на себя обработку кликов по изображениям, 
//открытие и закрытие модального окна, а также пролистывание изображений 
//при помощи клавиатуры.

//Выполняй это задание в файлах 02-lightbox.html и 02-lightbox.js. Разбей его на несколько подзадач:

// 1. Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.
//Используй готовый код из первого задания.

// 2. Подключение скрипта и стилей библиотеки используя CDN сервис cdnjs. 
//Необходимо добавить ссылки на два файла: simple - lightbox.min.js 
//и simple - lightbox.min.css.

// 3. Инициализация библиотеки после того как элементы галереи созданы и 
//добавлены в div.gallery.Для этого ознакомься с документацией SimpleLightbox
//- в первую очередь секции «Usage» и «Markup».

// 4. Посмотри в документации секцию «Options» и добавь отображение подписей 
//к изображениям из атрибута alt.Пусть подпись будет снизу и появляется 
//через 250 миллисекунд после открытия изображения.




import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGalleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalary(galleryItems);

containerGalleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createGalary(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <li>
	        <a class="gallery__item" href="${original}">
	            <img 
	                style="display:block"
	                class="gallery__image"
	                src="${preview}"
	                alt="${description}"
	                />
	        </a>
	    </li>
        `;
    }).join("");
};
console.log(containerGalleryEl, "hello try")


let gallery = new SimpleLightbox('.gallery a', {
	captions: true,
	captionsData: 'alt',
	captionDelay: 250,
});
    

