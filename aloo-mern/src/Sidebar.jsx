import React from 'react';
import './Sidebar.css';
import AllOutIcon from '@material-ui/icons/AllOut';
import { Avatar, IconButton } from '@material-ui/core';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <div className='sidebar_headerRight'></div>
        <IconButton>
          <AllOutIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
