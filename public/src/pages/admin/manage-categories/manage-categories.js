import template from './manage-categories.html';

export const manageCategories = ({
    template: template,
    controller: manageCategoriesCtrl
});

function manageCategoriesCtrl(categories) {

    this.categories = categories.data;
    this.addCategory = categories.add.bind(categories);
    this.removeCategory = categories.remove.bind(categories);

    this.headers = [
        'name',
        'actions'
    ];
}

manageCategories.$inject = ['categories'];