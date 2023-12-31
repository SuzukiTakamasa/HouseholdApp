import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'
import { Household, User, WhereCondition, Collection } from './constants'

export default class FirestoreHandler {
    private db: FirebaseFirestoreTypes.Module
    private collection: Collection
    constructor(collection: Collection) {
        this.db = firestore()
        if (__DEV__) this.db.useEmulator('localhost', 8080)
        this.collection = collection
    }

    async get(conditions: WhereCondition[]) {
        try {
          let query: FirebaseFirestoreTypes.Query = this.db.collection(this.collection);
      
          conditions.forEach(condition => {
            query = query.where(condition.field, condition.operator, condition.value);
          });
      
          const querySnapshot = await query.get();
          return querySnapshot.docs.map(doc => doc.data());
        } catch (error) {
          console.log("データの参照に失敗しました。", error);
          throw error;
        }
      }

    add(data: Household | User) {
        this.db.collection(this.collection).add(data)
        .then(() => {console.log("データの追加に成功しました。")})
        .catch(() => {console.log("データの追加に失敗しました。")})
    }

    update(data: Household | User, docId: string) {
        this.db.collection(this.collection).doc(docId).update(data)
        .then(() => {console.log("データの更新に成功しました。")})
        .catch(() => {console.log("データの参照に失敗しました。")})
    }

    delete(docId: string) {
        this.db.collection(this.collection).doc(docId).delete()
        .then(() => {console.log("データの削除に成功しました。")})
        .catch(() => {console.log("データの削除に失敗しました。")})
    }
}