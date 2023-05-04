
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

const COUNTRIES_QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
      phone
    }
  }
`;


export default function Home() {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Countries</h1>
      <ul>
        {data.countries.map((country:any) => (
          <li key={country.code}>
            {country.emoji} {country.name}{country.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}