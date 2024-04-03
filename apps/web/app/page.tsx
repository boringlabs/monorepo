"use client"


import { Button } from "@boring/ui/button";
import { useQuery, gql } from '@apollo/client';

const GET_COUNTER_UPDATES = gql`
  query GetCounterUpdates {
    counterUpdates(first: 5) {
      transactionHash
      id
      count
      blockTimestamp
      blockNumber
    }
  }
`;

type CounterUpdates = {
  id: string;
  count: number;
  transactionHash: string;
}

export default function Page(): JSX.Element {
  const { loading, error, data } = useQuery(GET_COUNTER_UPDATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
      <h1>Counter Updates</h1>
      <ul>
        {data.counterUpdates.map((update: CounterUpdates) => (
          <li key={update.id}>
            <p>Transaction Hash: {update.transactionHash}</p>
            <p>Count: {update.count}</p>
          </li>
        ))}
      </ul>
      <Button appName="BoringJobs">Click Me</Button>
    </div>
  );
}
