import React from 'react';
import './Sidebar.css';
import AllOutRoundedIcon from '@material-ui/icons/AllOutRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, IconButton } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <Avatar src='https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png' />
        <div className='sidebar_headerRight'>
          <IconButton>
            <AllOutRoundedIcon />
          </IconButton>
          <IconButton>
            <ChatRoundedIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
