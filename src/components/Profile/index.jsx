import * as S from './styled';

function Profile() {
  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/63127987?v=4"
        alt="User's Avatar"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>Caio Hatai</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <span>caioharuo</span>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>1</span>
          </div>
          <div>
            <h4>Starreds</h4>
            <span>1</span>
          </div>
          <div>
            <h4>Followings</h4>
            <span>1</span>
          </div>
        </S.WrapperStatusCount>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
}

export default Profile;
