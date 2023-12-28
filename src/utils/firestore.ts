import firestore from '@react-native-firebase/firestore'
import { Household, User, Collection } from './constants'

export default class FirestoreHandler {
    private db;
    constructor() {
        this.db = firestore()
    }

    add(collection: Collection, data: Household | User) {
        this.db.collection(collection).add(data)
        .then((doc) => {console.log("データの追加に成功しました。")})
        .catch((e) => {console.log("データの追加に失敗しました。")})
    }

    get(collection: Collection, ...condition: any) {
        const query: any = condition ? this.db.collection(collection).where(condition[0], condition[1], condition[2]).get() : this.db.collection(collection).get()
        .then((doc) => { return query.data() })
        .catch((e) => {console.log("データの参照に失敗しました。")})
    }

    update(collection: Collection, data: Household | User, docId: string) {
        this.db.collection(collection).doc(docId).update(data)
        .then((doc) => {console.log("データの更新に成功しました。")})
        .catch((e) => {console.log("データの参照に失敗しました。")})
    }

    delete(collection: Collection, docId: string) {
        this.db.collection(collection).doc(docId).delete()
        .then((doc) => {console.log("データの削除に成功しました。")})
        .catch((e) => {console.log("データの削除に失敗しました。")})
    }
}