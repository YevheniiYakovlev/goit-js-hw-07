//Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. 
//Разбей его на несколько подзадач:

//1. Создание и рендер разметки по массиву данных galleryItems и 
//предоставленному шаблону элемента галереи.

//2. Реализация делегирования на div.gallery и получение url большого 
//изображения.

//3. Подключение скрипта и стилей библиотеки модального окна basicLightbox. 
//Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные
//(.min) файлы библиотеки.

//4. Открытие модального окна по клику на элементе галереи. 
//Для этого ознакомься с документацией и примерами.

//5. Замена значения атрибута src элемента <img> в модальном окне перед 
//открытием.Используй готовую разметку модального окна с изображением 
//из примеров библиотеки basicLightbox.

//Ссылка на оригинальное изображение должна храниться в data-атрибуте source
// на элементе < img >, и указываться в href ссылки.
//Не добавляй другие HTML теги или CSS классы кроме тех, 
//что есть в этом шаблоне.

//Обрати внимание на то, что изображение обернуто в ссылку, а значит при 
//клике по умолчанию пользователь будет перенаправлен на другую страницу.
//Запрети это поведение по умолчанию.

//Добавь закрытие модального окна по нажатию клавиши Escape. 
//Сделай так, чтобы прослушивание клавиатуры было только пока открыто мод. окно.
//У библиотеки basicLightbox есть метод для программного закрытия мод. окна.


import { galleryItems } from './gallery-items.js';
// Change code below this line

const containerGalleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalary(galleryItems);

function createGalary(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
                    <a class="gallery__link" href="${original}">
                    <img
                    style="display:block"
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                    />
                </a>
                </div>`;
    }).join("");
}

function onItemGalerryClick(evt) {

    if (!evt.target.classList.contains('gallery__link')) {
        return;
    }
    console.log(evt.target,'this click');
    

}

containerGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
containerGalleryEl.addEventListener('click', onItemGalerryClick)



console.log(containerGalleryEl);

console.log(galleryItems);
