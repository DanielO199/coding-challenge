import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

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
      {data?.continent?.countries?.map((item: any) => (
        <div>
          {item.name}
          {item.emoji}
          {item.languages[0]?.name}
        </div>
      ))}
    </div>
  );
};

export default Countries;
