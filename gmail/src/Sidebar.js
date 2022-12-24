import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react'
import './Sidebar.css';
import InboxIcon from '@mui/icons-material/Inbox';
import AddIcon from '@mui/icons-material/Add';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import SidebarOption from './SidebarOption';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useDispatch } from 'react-redux';
import { openSendMessage } from './features/mailSlice';
function Sidebar() {
    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
  return (
    <div className='sidebar'>
        <Button 
            className='sidebar_compose' 
            startIcon={<AddIcon fontSize='large'/>}
            onClick={()=> dispatch(openSendMessage())}
        >Compose</Button>
        <SidebarOption Icon={InboxIcon} title='Inbox' number={54} selected={true} onClick={() => setFlag(true)}></SidebarOption>
        <SidebarOption Icon={StarBorderIcon} title='Starred' number={4} selected={flag}></SidebarOption>
        <SidebarOption Icon={WatchLaterOutlinedIcon} title='Snoozed' number={2} selected={flag}></SidebarOption>
        <SidebarOption Icon={LabelImportantOutlinedIcon} title='Important' number={10} selected={flag}></SidebarOption>
        <SidebarOption Icon={NearMeIcon} title='Sent' number={50} selected={flag}></SidebarOption>
        <SidebarOption Icon={NoteIcon} title='Drafts' number={1} selected={flag}></SidebarOption>
        <SidebarOption Icon={ExpandMoreIcon} title='More' number={1} selected={flag}></SidebarOption>
        
        <div className='sidebar_footer'>
            <div className='sidebar_footerIcons'>
                <IconButton>
                    <PersonIcon/>
                </IconButton>
                <IconButton>
                    <DuoIcon/>
                </IconButton>
                <IconButton>
                    <PhoneIcon/>
                </IconButton>
            </div>
        </div>
    </div>
  )
}

export default Sidebar