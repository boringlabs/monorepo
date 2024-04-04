/* eslint-disable */

export const transactions = [
];

export async function build(signer) {
  console.log(`Signer: ${await signer.getAddress()}`);
  console.log();

  const txs = [];

  for (const { title, depth, to, data, value } of transactions) {
    const indent = '  '.repeat(depth);
    console.log(`${indent}${title}`);
    if (!data) continue; // it is a provision step, it doesn't have a tx
    const tx = await signer.sendTransaction({ to, data, value });
    await tx.wait();
    console.log(`${indent}  tx hash: ${tx.hash}`);
    txs.push(tx);
  }

  return txs;
}
