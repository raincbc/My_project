import styled from "styled-components"

const UserInfo = ({ userPhoto, user }) => {
  console.log(user)
  return (
    <UserContainer>
          <UserLogo>
            <img src={userPhoto} />
          </UserLogo>
          <p>{user.email}</p>
    </UserContainer>
  )
}

export default UserInfo

const UserContainer = styled.div`
    margin-top:35px;
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
    max-width:max-content;
    padding:8px;
    border-radius: 15px;
    margin:0 auto;

    img{
        display:block;
        width:60px;
        height:60px;
    }
`;