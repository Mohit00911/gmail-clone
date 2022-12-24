import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton, Avatar } from '@mui/material';
import AppsIcon from '@mui/icons-material/Apps';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
function Header() {
    const history = useNavigate();
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const signOut =() => {
        auth.signOut().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <div className='header'>
        <div className='header_left'>
            <IconButton>
                <MenuIcon></MenuIcon>
            </IconButton>
            <img onClick={() => history('/')} style={{cursor : 'pointer'}} src='https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg' alt=''></img>
        </div>
        <div className='header_middle'>
            <SearchIcon></SearchIcon>
            <input type='text' placeholder='Search'></input>
            <ArrowDropDownIcon/>
            
        </div>
        <div className='header_right'>
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon></NotificationsIcon>
            </IconButton>
            <Avatar src={user?.photo} onClick={signOut} style={{cursor: 'pointer'}}></Avatar>
        </div>
    </div>
  )
}

export default Header