export default class CategoriesSvc {

    constructor(firebase, firebaseArray){
        var ref = firebase.database().ref('categories');
        this.data = firebaseArray(ref);
    }

    add(item) {
        this.data.$add(item);
    }

    remove(item) {
        this.data.$remove(item);
    }
}

CategoriesSvc.$inject = ['firebase', '$firebaseArray'];