import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
    width: 20%;
    height: 100vh;
    background-color: #206260;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Title = styled.h1`
    color: #fff;
    text-align: center;
    `;
    
const List = styled.ul`
    color: #fff;
    list-style-type: none;
    font-weight: 700;
    font-size: 1.2em;
    padding: 0;
    `;
    
const ListItem = styled.li`
    color: #fff;
    margin-left: 20px;
    list-style-type: none;
    font-weight: 700;
    margin-bottom: 20px;
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
        <div>
            <Title>MINUTE<br />MENTOR</Title>
            <hr />
            <List>
            <ListItem>Dashboard</ListItem>
            <hr />
            <ListItem>Edit Profile</ListItem>
            <hr />
            <ListItem>Private Files</ListItem>
            <hr />
            <ListItem>TO-DO</ListItem>
            <hr />
            <ListItem>Leave Requests</ListItem>
            <hr />
            </List>
        </div>
        <ListItem>Sign Out</ListItem>
        </SidebarContainer>
    );
};

export default Sidebar;