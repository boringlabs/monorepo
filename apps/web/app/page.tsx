"use client"

import { Button } from "boring-ui/button";

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

  return data.counterUpdates.map(({ id, count, transactionHash }: CounterUpdates) => (
    <div key={id}>
      <h3>{count}</h3>
      <br />
      <b>About this location:</b>
      <p>{transactionHash}</p>
      <br />
    </div>
  ));
}
