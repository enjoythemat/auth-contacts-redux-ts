import React, { FC } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'
import LinearProgress from '@mui/material/LinearProgress'
import { useTypedSelector } from '../hooks/typedSelector'
import { useAction } from '../hooks/useAction'

const NavBar: FC = () => {
  const { isAuth, user, isLoading } = useTypedSelector(state => state.auth)
  const { logout } = useAction()

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isLoading &&
        <Box sx={{ width: '100%' }} style={{position: 'absolute', top: 0, left: 0}}>
          <LinearProgress />
        </Box>
      }
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link color="inherit" underline="none" href="https://t.me/enjoythemat">Telegram для предложений</Link>
          </Typography>
          <Typography  marginRight={4}>{user.username || ''}</Typography>
          {isAuth
            ? <Button color="inherit" onClick={logout}>Выйти</Button>
            : <Button color="inherit">Войти</Button>
          }
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
