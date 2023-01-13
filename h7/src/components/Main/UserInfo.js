import styled from "styled-components"

const UserInfo = ({userData}) => {
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

    p{
        font-weight: 700;
        font-size: 14px;
        line-height: 16px;
        margin-top:13px;
    }
`;

const UserLogo = styled.div`
    background-color:white;
    // max-width:max-content;
    padding:8px;
    border-radius: 15px;

    img{
        display:block;
        width:64px;
        height:64px;
    }
`;