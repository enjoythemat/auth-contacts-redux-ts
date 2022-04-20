import React, { FC, useState } from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography
} from '@mui/material'
import { useTypedSelector } from '../hooks/typedSelector'
import { useAction } from '../hooks/useAction'
import { GridCellParams } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Имя', width: 130 },
  { field: 'lastName', headerName: 'Фамилия', width: 130 },
  {
    field: 'age',
    headerName: 'Возраст',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Полное имя',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  }
]

const Contacts: FC = () => {
  const { contacts } = useTypedSelector(state => state.contacts)
  const { addContact, deleteContact, editContact } = useAction()

  const [idForEdit, setIdForEdit] = useState(0)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)

  const handleClickAddOpen = () => {
    setOpen(true)
  }
  const handleClickEditOpen = () => {
    setOpen2(true)
  }
  const handleClose = () => {
    setOpen(false)
    setOpen2(false)
  }
  const handleAddContact = () => {
    addContact({
      id: contacts[contacts.length - 1].id + 1,
      firstName,
      lastName,
      age
    })
    setOpen(false)
  }
  const handleEditContact = () => {
    editContact({
      id: idForEdit,
      age,
      firstName,
      lastName
    })
    handleClose()
  }
  const handleDeleteContact = () => {
    deleteContact(idForEdit)
    setFirstName('')
    setLastName('')
    setAge(0)
    setIdForEdit(0)
  }
  const handleCellClick = (params: GridCellParams) => {
    setFirstName(params.row.firstName)
    setLastName(params.row.lastName)
    setAge(params.row.age)
    setIdForEdit(params.row.id)
  }

  return (
    <div style={{
      width: 600,
      margin: '0 auto'
    }}>
      <Typography variant="h4" style={{ lineHeight: 3 }}>
        Контакты:
      </Typography>
      <DataGrid
        autoHeight={true}
        rows={contacts}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        hideFooterSelectedRowCount={true}
        onCellClick={handleCellClick}
      />
      <Button
        variant="outlined"
        style={{marginTop: '1rem'}}
        onClick={handleClickAddOpen}
      >
        Добавить
      </Button>
      <Button
        variant="outlined"
        style={{marginTop: '1rem', marginLeft: '1rem'}}
        onClick={handleClickEditOpen}
        disabled={!idForEdit}
      >
        Изменить
      </Button>
      <Button
        variant="outlined"
        color="error"
        style={{marginTop: '1rem', marginLeft: '1rem'}}
        onClick={handleDeleteContact}
      >
        Удалить
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Укажите данные о человеке, чтобы добавить или изменить его в списке контактов.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Имя"
            fullWidth
            variant="standard"
            onChange={event => setFirstName(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Фамилия"
            fullWidth
            variant="standard"
            onChange={event => setLastName(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Возраст"
            fullWidth
            variant="standard"
            type="number"
            onChange={event => setAge(+event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleAddContact}>Добавить</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={open2} onClose={handleClose}>
        <DialogTitle>Изменить</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Укажите новые данные человека, чтобы изменить его в списке контактов.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Имя"
            fullWidth
            variant="standard"
            value={firstName}
            onChange={event => setFirstName(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Фамилия"
            fullWidth
            variant="standard"
            value={lastName}
            onChange={event => setLastName(event.target.value)}
          />
          <TextField
            margin="dense"
            label="Возраст"
            fullWidth
            variant="standard"
            value={age}
            onChange={event => setAge(+event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleEditContact}>Изменить</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Contacts
