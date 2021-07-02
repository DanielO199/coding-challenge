import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ICountry } from 'types';
import { GET_COUNTRIES } from 'graphql/queries';
import { Wrapper, StyledItem } from './styles';

interface ParamTypes {
  code: string;
}

const Countries = () => {
  const code = useParams<ParamTypes>().code;
  const { error, loading, data } = useQuery(GET_COUNTRIES, {
    variables: {
      code
    }
  });

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error...</div>;

  return (
    <Wrapper>
      {data?.continent?.countries?.map(
        ({ name, emoji, languages }: ICountry) => (
          <StyledItem key={name}>
            <div>Nazwa: {name}</div>
            <div>{emoji}</div>
            <div>Język: {languages[0]?.name}</div>
          </StyledItem>
        )
      )}
    </Wrapper>
  );
};

export default Countries;
