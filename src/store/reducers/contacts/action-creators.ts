import { Contact, ContactsActionEnum } from './types'

export const ContactsActionCreators = {
  addContact: (contact: Contact) => ({
    type: ContactsActionEnum.ADD_CONTACT,
    payload: contact
  }),
  deleteContact: (id: number) => ({
    type: ContactsActionEnum.DELETE_CONTACT,
    payload: id
  }),
  editContact: (contact: Contact) => ({
    type: ContactsActionEnum.EDIT_CONTACT,
    payload: contact
  })
}
