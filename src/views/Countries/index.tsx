import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

import { ICountry } from 'types';
import { GET_COUNTRIES } from 'graphql/queries';

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
    <div>
      {data?.continent?.countries?.map(
        ({ name, emoji, languages }: ICountry) => (
          <div key={name}>
            {name}
            {emoji}
            {languages[0]?.name}
          </div>
        )
      )}
    </div>
  );
};

export default Countries;
