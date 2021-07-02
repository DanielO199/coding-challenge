import { useQuery } from '@apollo/client';

import { IContinent } from 'types';
import { GET_CONTINENTS } from 'graphql/queries';
import { Wrapper, StyledLink } from './styles';

const Continents = () => {
  const { error, loading, data } = useQuery(GET_CONTINENTS);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <Wrapper>
      {data?.continents?.map(({ code, name }: IContinent) => (
        <StyledLink to={`/continents/${code}`} key={code}>
          {name} - {code}
        </StyledLink>
      ))}
    </Wrapper>
  );
};

export default Continents;
