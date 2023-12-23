import React from 'react';

const Sidebar = () => {
  return (
    <aside style={styles.sidebar}>
      <div style={styles.sidebarContent}>
        <div style={styles.logo}>Sidebar Logo</div>
        <ul style={styles.navList}>
          <li><a href="#dashboard">Dashboard</a></li>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#settings">Settings</a></li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;



const styles = {

    sidebar: {
      width: '200px',
      backgroundColor: '#f4f4f4',
      padding: '20px',
      boxSizing: 'border-box',
      position: "sticky",
      top: "81px",
      zIndex: "1"
    },
    logo: {
        fontSize: '1.5em',
        fontWeight: 'bold',
    },
    sidebarContent: {
      display: 'flex',
      flexDirection: 'column',
    },
    navList: {
      listStyle: 'none',
      padding: 0,
      marginTop: '20px',
    },
    mainContent: {
      flex: 1,
      padding: '20px',
    },
    contentContainer: {
      display: 'flex',
    },
  };