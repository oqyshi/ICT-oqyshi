import firebase from "firebase"

class Fire {


    addPost = async ({text, orgs }) => {

        return new Promise((res, rej) => {
            this.firestore
                .collection("users")
                .add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    org: orgs
                })
                .then(ref => {
                    res(ref);
                })
                .catch(error => {
                    rej(error);
                });
        });
    };

    get firestore() {
        return firebase.firestore();
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }

    get email() {
        return (firebase.auth().currentUser || {}).email;
    }

    get timestamp() {
        return Date.now();
    }
}

Fire.shared = new Fire();
export default Fire;