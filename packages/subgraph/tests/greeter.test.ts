import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import {} from "@graphprotocol/graph-ts"
import { NewGreeting } from "../generated/schema"
import { NewGreeting as NewGreetingEvent } from "../generated/Greeter/Greeter"
import { handleNewGreeting } from "../src/greeter"
import { createNewGreetingEvent } from "./greeter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let newGreeting = "Example string value"
    let newNewGreetingEvent = createNewGreetingEvent(newGreeting)
    handleNewGreeting(newNewGreetingEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("NewGreeting created and stored", () => {
    assert.entityCount("NewGreeting", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "NewGreeting",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "newGreeting",
      "Example string value"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
