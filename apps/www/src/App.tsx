import { createResource, type Component, For } from 'solid-js';
import { Client, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://api.studio.thegraph.com/query/70114/boringjobs/version/latest',
  exchanges: [
    cacheExchange,
    fetchExchange,
  ],
});

const [counterUpdates] = createResource(() => {
  return client.query(`
    query GetCounterUpdates {
      counterUpdates(first: 5) {
        transactionHash
        id
        count
        blockTimestamp
        blockNumber
      }
    }
  `, {}).toPromise().then(({ data }) => data.counterUpdates);
})

const App: Component = () => {
  return (
    <div>
      <For each={counterUpdates()} fallback={<p>Loading...</p>}>
        {({transactionHash, count}) => (
          <div>
            <p>Transaction Hash: {transactionHash}</p>
            <p>Count: {count}</p>
          </div>
        )}
      </For>
    </div>
  );
};

export default App;
