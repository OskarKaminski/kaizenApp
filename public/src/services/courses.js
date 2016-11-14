export default class CoursesSvc {

    constructor(firebase, firebaseArray){
        var ref = firebase.database().ref('courses');
        this.data = firebaseArray(ref);
    }

    add(item) {
        this.data.$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

CoursesSvc.$inject = ['firebase', '$firebaseArray'];