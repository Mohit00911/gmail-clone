import { Button, IconButton } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './SendMail.css'
import {useForm} from 'react-hook-form'
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from './firebase';
import firebase from 'firebase/compat/app'
function SendMail() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit= (formData) =>{
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
    }
    const dispatch = useDispatch();
    return (
    <div className='sendMail'>
        <div className='sendMail_header'>
            <h3>New Message</h3>
            <IconButton>
                <CloseIcon 
                    className='sendMail_close'
                    onClick={()=> dispatch(closeSendMessage())}
                />
            </IconButton>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register('to', {required : 'true'})} placeholder='To' />
            {errors.to && <p className='sendMail_error'>To is required.</p>}
            <input type='text' placeholder='Subject' {...register('subject', {required : 'true'})}/>
            {errors.subject && <p className='sendMail_error'>Subject is required.</p>}
            <input type='text' placeholder='Message...' className='sendMail_message' {...register('message',{required : 'true'})}/>
            {errors.message && <p className='sendMail_error'>Message is required.</p>}
            <div className='sendMail_options'>
                <Button 
                    className='sendMail_send'
                    color='primary'
                    variant='contained'
                    type='submit'
                >Send</Button>
                
            </div>
        </form>
    </div>
  )
}

export default SendMail