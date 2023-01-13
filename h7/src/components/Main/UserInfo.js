import styled from "styled-components"

const UserInfo = ({userData}) => {
    console.log(userData.photo)
  return (
    <UserContainer>
          <UserLogo>
            <img src={userData.photo} />
          </UserLogo>
          <p>{userData.name}</p>
    </UserContainer>
  )
}

export default UserInfo

const UserContainer = styled.div`
    margin-top:100px;
    margin-left:97px;
    margin-right:77px;
`;

const UserLogo = styled.div`
    background-color:white;
    max-width:max-content;
    padding:8px;
    border-radius: 15px;

    img{
        
        width:64px;
        height:64px;
    }
`;