import { useContext } from 'react';
import { GithubContext } from '../providers/GithubProvider';

function useGithub() {
  const { githubState } = useContext(GithubContext);

  return { githubState };
}

export default useGithub;
