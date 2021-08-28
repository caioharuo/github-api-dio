import RepositoryItem from '../RepositoryItem';
import * as S from './styled';

function Repositories() {
  return (
    <S.WrapperTabs
      selectedTabClassName="is-selected"
      selectedTabPanelClassName="is-selected"
    >
      <S.WrapperTabList>
        <S.WrapperTab>Repositories</S.WrapperTab>
        <S.WrapperTab>Starred</S.WrapperTab>
      </S.WrapperTabList>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="alura-dev"
          fullName="caioharuo/alura-dev"
          linkToRepo="https://github.com/caioharuo/alura-dev"
        />
      </S.WrapperTabPanel>

      <S.WrapperTabPanel>
        <RepositoryItem
          name="github-api-dio"
          fullName="caioharuo/github-api-dio"
          linkToRepo="https://github.com/caioharuo/github-api-dio"
        />
      </S.WrapperTabPanel>
    </S.WrapperTabs>
  );
}

export default Repositories;
