import Wrapper from 'containers/Wrapper/Wrapper';
import { ThemeContext, themes } from 'context/ThemeContext';
import { useContext } from 'react';

const Home = () => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <Wrapper>
      <button
        onClick={() => {
          setTheme(themes.deu);
        }}
      >
        Deu
      </button>
      <button
        onClick={() => {
          setTheme(themes.true);
        }}
      >
        True
      </button>
    </Wrapper>
  );
};
export default Home;
