import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import { IContinent } from 'types';
import { GET_CONTINENTS } from 'graphql/queries';

const Continents = () => {
  const { error, loading, data } = useQuery(GET_CONTINENTS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <div>
      {data?.continents?.map(({ code, name }: IContinent) => (
        <Link to={`/continents/${code}`} key={code}>
          {code} {name}
        </Link>
      ))}
    </div>
  );
};

export default Continents;
