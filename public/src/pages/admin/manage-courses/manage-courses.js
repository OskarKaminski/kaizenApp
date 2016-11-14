import template from './manage-courses.html';

export const manageCourses = ({
    template: template,
    controller: manageCoursesCtrl
});

function manageCoursesCtrl(courses) {

    this.courses = courses.data;
    this.addCourse = courses.add.bind(courses);
    this.removeCourse = courses.remove.bind(courses);

    this.headers = [
        'name',
        'actions'
    ];
}

manageCourses.$inject = ['courses'];