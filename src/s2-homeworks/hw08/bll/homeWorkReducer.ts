import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            let stateCopy = [...state]
            if (action.payload == 'up') {
                stateCopy.sort((a, b) => b.age - a.age)
            } else if (action.payload == 'down') {
                stateCopy.sort((a, b) => a.age - b.age)
            }
            return stateCopy
        }
        case 'check': {
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}
