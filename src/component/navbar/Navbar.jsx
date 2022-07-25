import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ListIcon from '@mui/icons-material/List';


const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='wrapper'>
        <div className='search'>
          <input type='text'placeholder='search...'/>
          <SearchIcon/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon className='icon'/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className='icon'/>
          </div>
          <div className='item'>
            <FullscreenExitIcon className='icon'/>
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className='icon'/>
            <div className='counter'>1</div>
          </div>
          <div className='item'>
            <ChatBubbleOutlineIcon className='icon'/>
            <div className='counter'>2</div>
          </div>
          <div className='item'>
            <ListIcon className='icon'/>
          </div>
          <div className='item'>
            <img src='https://images.unsplash.com/photo-1605949405965-d49ada3f9189?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
             alt='/' className='avatar'/>

          </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar