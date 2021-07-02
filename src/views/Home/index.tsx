import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to={'/continents'}> Zobacz Kontynenty</Link>
    </div>
  );
};

export default Home;
