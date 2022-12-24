import React, { useEffect } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import EmailList from './EmailList';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';
import Header from './Header';
import Login from './Login';
import Mail from './Mail';
import SendMail from './SendMail';
import Sidebar from './Sidebar';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() =>{
    auth.onAuthStateChanged((user) =>{
      if(user){
        dispatch(login({
          displayName: user.displayName,
          email: user.email,
          photo: user.photoURL
        }))
      }
    })
  }, [])
  return (
    <Router>
      {!user ?(<Login/>):(
    <div className="App">
      <Header></Header>

      <div className='app_body'>
      <Sidebar></Sidebar>
      <Routes>
        <Route path='/mail' element = {<Mail/>}/>
        <Route path = '/' element={<EmailList></EmailList>}></Route>
      </Routes>
      </div>
      {sendMessageIsOpen && <SendMail/>}
    </div>
    )}
    </Router>
  );

}

export default App;
