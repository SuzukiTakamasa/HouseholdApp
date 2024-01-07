import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export interface HouseholdData {
    id?: string,
    year?: number,
    month?: number,
    item: string,
    amount: number,
    isDefault: boolean,
    version?: number
}

export interface UserData {
    id?: string,
    emailAddress?: string,
    sessionId?: string,
    isOwner: boolean,
    verson?: number
}

export type GetResult = HouseholdData[] | UserData[]

export type Collection = "household" | "user"

export interface WhereCondition {
    field: string;
    operator: FirebaseFirestoreTypes.WhereFilterOp;
    value: any;
  }