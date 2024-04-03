import { NewGreeting as NewGreetingEvent } from "../generated/Greeter/Greeter"
import { NewGreeting } from "../generated/schema"

export function handleNewGreeting(event: NewGreetingEvent): void {
  let entity = new NewGreeting(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newGreeting = event.params.newGreeting

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
