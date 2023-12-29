import firestore from '@react-native-firebase/firestore'
import { Household, User, Collection } from './constants'

export default class FirestoreHandler {
    private db: any
    constructor() {
        this.db = __DEV__ ? firestore().useEmulator('localhost', 8080) : firestore()
    }

    add(collection: Collection, data: Household | User) {
        this.db.collection(collection).add(data)
        .then(() => {console.log("データの追加に成功しました。")})
        .catch(() => {console.log("データの追加に失敗しました。")})
    }

    get(collection: Collection, ...condition: any) {
        const query: any = condition ? this.db.collection(collection).where(condition[0], condition[1], condition[2]).get() : this.db.collection(collection).get()
        .then(() => { return query.data() })
        .catch(() => {console.log("データの参照に失敗しました。")})
    }

    update(collection: Collection, data: Household | User, docId: string) {
        this.db.collection(collection).doc(docId).update(data)
        .then(() => {console.log("データの更新に成功しました。")})
        .catch(() => {console.log("データの参照に失敗しました。")})
    }

    delete(collection: Collection, docId: string) {
        this.db.collection(collection).doc(docId).delete()
        .then(() => {console.log("データの削除に成功しました。")})
        .catch(() => {console.log("データの削除に失敗しました。")})
    }
}