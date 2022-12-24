import { IconButton } from '@mui/material';
import React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PrintIcon from '@mui/icons-material/Print';
import UnfoldLessIcon from '@mui/icons-material/UnfoldLess';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MailIcon from '@mui/icons-material/Mail';
import DeleteIcon from '@mui/icons-material/Delete';
import ErrorIcon from '@mui/icons-material/Error';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './Mail.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectOpenMail } from './features/mailSlice';
function Mail() {
    const history = useNavigate();
    const selectedMail = useSelector(selectOpenMail);
  return (
    <div className='mail'>
        <div className='mail_tools'>
            <div className='mail_toolsLeft'>
                <IconButton onClick={()=> history('/')}>
                    <ArrowBackIcon></ArrowBackIcon>
                </IconButton>
                <IconButton>
                    <MoveToInboxIcon/>
                </IconButton>
                <IconButton>
                    <ErrorIcon/>
                </IconButton>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
                <IconButton>
                    <MailIcon/>
                </IconButton>
                <IconButton>
                    <WatchLaterIcon/>
                </IconButton>
                <IconButton>
                    <CheckCircleIcon/>
                </IconButton>
                <IconButton>
                    <LabelImportantIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
            <div className='mail_toolsRight'>
                <IconButton>
                    <UnfoldLessIcon/>
                </IconButton>
                <IconButton>
                    <PrintIcon/>
                </IconButton>
                <IconButton>
                    <ExitToAppIcon/>
                </IconButton>
            </div>            
        </div>
        <div className='mail_body'>
            <div className='mail_bodyHeader'>
                <h2>{selectedMail?.title}</h2>
                <LabelImportantIcon className='mail_important'/>
                <p>{selectedMail?.subject}</p>
                <p className='mail_time'>{selectedMail?.time}</p>
            </div>
            <div className='mail_message'>
                <p>{selectedMail?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Mail