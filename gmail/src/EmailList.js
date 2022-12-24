import { Checkbox, IconButton} from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RedoIcon from '@mui/icons-material/Redo';
import SettingsIcon from '@mui/icons-material/Settings';
import KeyboardHideIcon from '@mui/icons-material/KeyboardHide';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import './EmailList.css';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PeopleIcon from '@mui/icons-material/People';
import InboxIcon from '@mui/icons-material/Inbox';
import Section from './Section';
import EmailRow from './EmailRow';
import { db } from './firebase';
function EmailList() {
    const [emails, setEmails] = useState([]);
    useEffect(() =>{
        db.collection('emails').orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) => setEmails(snapshot.docs.map((doc) =>({
            id : doc.id,
            data : doc.data()
        }))))
    }, [])
  return (
    <div className='emailList'>
        <div className='emailList_settings'>
            <div className='emailList_settingsLeft'>
                <Checkbox/>
                <IconButton>
                    <ArrowDropDownIcon></ArrowDropDownIcon>
                </IconButton>
                <IconButton>
                    <RedoIcon></RedoIcon>
                </IconButton>
                <IconButton>
                    <MoreVertIcon></MoreVertIcon>
                </IconButton>
            </div>
            <div className='emailList_settingsRight'>
                <IconButton>
                    <KeyboardArrowLeftIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardArrowRightIcon/>
                </IconButton>
                <IconButton>
                    <KeyboardHideIcon/>
                </IconButton>
                <IconButton>
                    <SettingsIcon/>
                </IconButton>
            </div>
            
        </div>
        <div className='emailList_sections'>
            <Section Icon={InboxIcon} title='Primary' color='red' selected></Section>
            <Section Icon={PeopleIcon} title='Social' color='#1A73E8'></Section>
            <Section Icon={LocalOfferIcon} title='Promotions' color='green' ></Section>
        </div>
        <div className='emailList_list'>
            {emails.map(({id, data:{to, subject, message, timestamp}}) => (
                <EmailRow
                    id = {id}
                    key = {id}
                    title = {to}
                    subject = {subject}
                    description = {message}
                    time = {new Date(timestamp?.seconds*1000).toUTCString()}
                />
            ))}
            <EmailRow
                title='Instagram'
                subject='Got a follow request!!!'
                description='This is a test.'
                time='10pm'
            />
            <EmailRow
                title='Instagram'
                subject='Someone liked your post!!!'
                description='Click to open.'
                time='10pm'
            />
        </div>
    </div>
  )
}

export default EmailList