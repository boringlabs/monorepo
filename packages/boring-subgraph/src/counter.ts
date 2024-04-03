import { CounterUpdate as CounterUpdateEvent } from "../generated/Counter/Counter"
import { CounterUpdate } from "../generated/schema"

export function handleCounterUpdate(event: CounterUpdateEvent): void {
  let entity = new CounterUpdate(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
