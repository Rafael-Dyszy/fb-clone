import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

function SidebarRow({ src, Icon, title }) {
  return (
    // structure of sidebar
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
