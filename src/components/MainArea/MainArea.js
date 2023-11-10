import React from 'react';
import styled from 'styled-components';
import Card from '../Card/Card';

const MainContainer = styled.div`
  margin-left: 20%;
  padding: 20px;
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const UserDataLine = styled.div`
  margin-bottom: 20px;
`;

const UserData = styled.div`
  margin-left: 20px;
  font-size: 30px;
  font-weight: 700;
`;

const MainArea = () => {
  const profilePic = process.env.PUBLIC_URL + '/profile_pic.png';

  return (
    <MainContainer>
      <Card>
        <ProfileContainer>
          <img src={profilePic} alt="Profile" />
          <UserData>
            <UserDataLine>EmpID: 123</UserDataLine>
            <UserDataLine>Name: Harsh Gupta</UserDataLine>
            <UserDataLine>Department: IT Department</UserDataLine>
          </UserData>
        </ProfileContainer>
      </Card>
      <Card>
        <div>Employee Details</div>
      </Card>
    </MainContainer>
  );
};

export default MainArea;