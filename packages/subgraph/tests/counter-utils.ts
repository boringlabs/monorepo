import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt } from "@graphprotocol/graph-ts"
import { CounterUpdate } from "../generated/Counter/Counter"

export function createCounterUpdateEvent(count: BigInt): CounterUpdate {
  let counterUpdateEvent = changetype<CounterUpdate>(newMockEvent())

  counterUpdateEvent.parameters = new Array()

  counterUpdateEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )

  return counterUpdateEvent
}
