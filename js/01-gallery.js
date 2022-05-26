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
const itemGalerryClick = onItemGalerryClick;

containerGalleryEl.insertAdjacentHTML('beforeend', galleryMarkup);
containerGalleryEl.addEventListener('click', itemGalerryClick);


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

    if (evt.target.nodeName !== "IMG") {
        return;
    }
    console.log(evt.target, 'this click');
    evt.preventDefault();
    modalShow(evt.target.dataset.source);
}

console.log(containerGalleryEl);

console.log(galleryItems);


let instance;
	function modalShow(src) {
        instance = basicLightbox.create(
            `
        <div class="modal">
            <img src="${src}" style="height:100vh; display:block"></img>
        </div>
        `,
    {
        onShow: instance => {
        addListener();
        },
        onClose: instance => {
        removeListener();
        },
    },
);
    instance.show();
    }
function addListener() {
  window.addEventListener('keydown', onEscClick);
}

function onEscClick(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}

function removeListener() {
  window.removeEventListener('keydown', onEscClick);
}






