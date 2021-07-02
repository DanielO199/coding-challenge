import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { GET_CONTINENTS } from 'graphql/queries';

const Continents = () => {
  const { error, loading, data } = useQuery(GET_CONTINENTS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      {data.continents.map((item: any) => (
        <Link to={`/continents/${item.code}`} key={item.code}>
          {item.code} {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Continents;
