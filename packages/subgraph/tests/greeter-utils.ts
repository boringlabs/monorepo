import { newMockEvent } from "matchstick-as"
import { ethereum } from "@graphprotocol/graph-ts"
import { NewGreeting } from "../generated/Greeter/Greeter"

export function createNewGreetingEvent(newGreeting: string): NewGreeting {
  let newGreetingEvent = changetype<NewGreeting>(newMockEvent())

  newGreetingEvent.parameters = new Array()

  newGreetingEvent.parameters.push(
    new ethereum.EventParam(
      "newGreeting",
      ethereum.Value.fromString(newGreeting)
    )
  )

  return newGreetingEvent
}
