export interface Contact {
  id: number
  lastName: string
  firstName: string
  age: number
}

export enum ContactsActionEnum {
  ADD_CONTACT = 'ADD_CONTACT',
  EDIT_CONTACT = 'EDIT_CONTACT',
  DELETE_CONTACT = 'DELETE_CONTACT'
}

export interface AddContactAction {
  type: ContactsActionEnum.ADD_CONTACT
  payload: Contact
}

export interface EditContactAction {
  type: ContactsActionEnum.EDIT_CONTACT
  payload: Contact
}

export interface DeleteContactAction {
  type: ContactsActionEnum.DELETE_CONTACT
  payload: number
}

export interface ContactsState {
  contacts: Contact[]
}

export type ContactsAction = AddContactAction | EditContactAction | DeleteContactAction
