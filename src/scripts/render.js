const renderCards = (array) => {
    const ulCards = document.querySelector('#cards__render--product');

    ulCards.textContent = '';
    array.forEach((product) => {
        const cardProduct = createCard(product);
        ulCards.appendChild(cardProduct)

    });

};


const renderCategory = (array) => {
    const ulCategory = document.querySelector('#btn__render--category');

    array.forEach((category) => {
        const liCategory = createCategory(category);
        ulCategory.appendChild(liCategory);
    });
};


const renderCategoryFilter = (arrayProducts) => {
    let indexCategory = Number(localStorage.getItem('indexOfCategory'));
    const inputFiltered = arrayProducts.filter((product) => {
        if (indexCategory === product.category) {
            return product;
        } else if (indexCategory === 0) {
            return product;
        };
    });
    renderCards(inputFiltered);
};


const renderValueFilter = (arrayProducts) => {
    let indexCategory = Number(localStorage.getItem('indexOfCategory'));
    let input_range = Number(localStorage.getItem('inputValue'));

    const inputFiltered = arrayProducts.filter((product) => {

        if (input_range >= product.price && indexCategory === product.category) {
            return product;
        } else if (input_range >= product.price && indexCategory === 0) {
            return product;
        };
    });
    renderCards(inputFiltered);
};


const renderPreferences = () => {
    const lastFilter = localStorage.getItem('lastCategoryClicked');
    const btnAll = document.querySelectorAll('#btn__render--category > li > button');

    btnAll.forEach((button) => {
        if (button.textContent === lastFilter) {
            button.classList.add('btn__category--active');
        };
    });
};

renderCards(products);
renderCategory(categories);
btnSearchCategory(categories, products);
inputSearchValue(products);