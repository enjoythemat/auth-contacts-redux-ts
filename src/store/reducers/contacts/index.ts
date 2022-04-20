import { ContactsAction, ContactsActionEnum, ContactsState } from './types'

const initialState: ContactsState = {
  contacts: [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 24 },
    { id: 6, lastName: 'Melisandre', firstName: 'the Red Woman', age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ]
}

export default function contactsReducer(state = initialState, action: ContactsAction): ContactsState {
  switch (action.type) {
    case ContactsActionEnum.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      }
    case ContactsActionEnum.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(el => el.id !== action.payload)
      }
    case ContactsActionEnum.EDIT_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(el => el.id === action.payload.id
          ? {...action.payload}
          : el
        )
      }
    default:
      return state
  }
}
