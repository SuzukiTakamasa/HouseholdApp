import firestore from '@react-native-firebase/firestore'

export default class FirestoreHandler {
    private db;
    constructor() {
        this.db = firestore()
    }

    add(collection: string, data: object) {
        this.db.collection(collection).add(data)
        .then((doc) => {console.log("データの追加に成功しました。")})
        .catch((e) => {console.log("データの追加に失敗しました。")})
    }

    get(collection: string, ...condition: any) {
        const query = condition ? this.db.collection(collection).where(condition[0], condition[1], condition[2]).get() : this.db.collection(collection).get()
        .then((doc) => {console.log("データの参照に成功しました。")})
        .catch((e) => {console.log("データの参照に失敗しました。")})
    }
}