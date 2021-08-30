import * as S from './styled';
import useGithub from '../../hooks/github-hooks';
import { useState } from 'react';

function Header() {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  function handleSubmitGetUser(event) {
    event.preventDefault();

    if (!usernameForSearch) return;

    return getUser(usernameForSearch);
  }

  return (
    <header>
      <S.Wrapper onSubmit={handleSubmitGetUser}>
        <input
          type="text"
          placeholder="Digite o username para pesquisa..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit">
          <span>Buscar</span>
        </button>
      </S.Wrapper>
    </header>
  );
}

export default Header;
