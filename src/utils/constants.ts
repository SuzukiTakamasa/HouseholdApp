export interface Household {
    id?: string,
    year?: number,
    month?: number,
    item: string,
    amount: number,
    isDefault: boolean,
    version: number
}

export interface User {
    id?: string,
    emailAddress?: string,
    sessionId?: string,
    isOwner: boolean,
    verson: number
}

export type Collection = "household" | "user"