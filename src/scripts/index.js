function createCard({ title, category, price, img, band, year, id }) {

    const card = document.createElement('li');
    const figureALbum = document.createElement('figure');
    const imgAlbum = document.createElement('img');
    const divCaption = document.createElement('div');
    const bandName = document.createElement('p');
    const bandYear = document.createElement('p');
    const productDescription = document.createElement('div');
    const albumTitle = document.createElement('h2');
    const productPriceArea = document.createElement('span');
    const productPrice = document.createElement('p');
    const btnSubmit = document.createElement('button');

    card.classList.add('card__list');
    productPriceArea.classList.add('price_area');
    btnSubmit.classList.add('btn_submit');

    imgAlbum.dataset.categoryId = category;
    card.dataset.idCard = id;

    albumTitle.textContent = title;
    productPrice.textContent = `R$ ${price.toFixed(2)}`;
    imgAlbum.src = img;
    imgAlbum.alt = band;
    bandName.textContent = band;
    bandYear.textContent = year;
    btnSubmit.textContent = 'Comprar';

    figureALbum.append(imgAlbum, divCaption);
    divCaption.append(bandName, bandYear);
    productDescription.append(albumTitle, productPriceArea);
    productPriceArea.append(productPrice, btnSubmit);
    card.append(figureALbum, productDescription);

    return card;
}


function createCategory(categoryList) {

    const liCategory = document.createElement('li');
    const liButton = document.createElement('button');

    liButton.classList.add('btn__category');
    liButton.textContent = categoryList;

    liCategory.appendChild(liButton);
    return liCategory;
};


const btnSearchCategory = (arrayCategories, arrayProducts) => {
    const btnCategory = document.querySelectorAll('#btn__render--category > li > button');

    btnCategory.forEach((button) => {
        button.addEventListener('click', (event) => {
            console.log(button);
            event.preventDefault();
            const element = event.target;

            arrayCategories.forEach(() => {
                const index = arrayCategories.indexOf(element.textContent);
                localStorage.setItem('indexOfCategory', index);
            });

            btnCategory.forEach((activeButton) => {
                if (activeButton.classList.contains('btn__category--active')) {
                    activeButton.classList.remove('btn__category--active');
                    activeButton.classList.add('btn__category');
                }
            });

            localStorage.setItem('lastCategoryCLicked', element.textContent);
            element.classList.add('btn__category--active');
            element.classList.remove('btn__category');
            renderCategoryFilter(arrayProducts);
        });
    });
    renderPreferences();
};


const inputSearchValue = (arrayProducts) => {
    const inputRange = document.querySelector('.input_range');
    const priceRange = document.querySelector('.setPrice__container > div > p');

    inputRange.addEventListener('input', (event) => {
        event.preventDefault();
        localStorage.setItem('inputValue', inputRange.value);

        const valueRange = localStorage.getItem('inputValue');
        priceRange.innerText = `Até R$ ${Number(valueRange).toFixed(2)}`;

        renderValueFilter(arrayProducts)
    });
};
