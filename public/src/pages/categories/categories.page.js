import template from './categories.page.html';

export default {
    template: template,
    controller: categoriesCtrl
}

function categoriesCtrl(categories) {
    this.categories = categories.data;
}

categoriesCtrl.$inject = ['categories'];