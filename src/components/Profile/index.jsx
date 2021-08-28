import useGithub from '../../hooks/github-hooks';
import * as S from './styled';

function Profile() {
  const { githubState } = useGithub();

  return (
    <S.Wrapper>
      <S.WrapperImage
        src="https://avatars.githubusercontent.com/u/63127987?v=4"
        alt="User's Avatar"
      />
      <S.WrapperInfoUser>
        <div>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUsername>
            <h3>Username: </h3>
            <a
              href="https://github.com/caioharuo"
              target="_blank"
              rel="noreferrer"
            >
              caioharuo
            </a>
          </S.WrapperUsername>
        </div>
        <S.WrapperStatusCount>
          <div>
            <h4>Followers</h4>
            <span>1</span>
          </div>
          <div>
            <h4>Starred</h4>
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
