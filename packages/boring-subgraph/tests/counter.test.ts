import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt } from "@graphprotocol/graph-ts"
import { CounterUpdate } from "../generated/schema"
import { CounterUpdate as CounterUpdateEvent } from "../generated/Counter/Counter"
import { handleCounterUpdate } from "../src/counter"
import { createCounterUpdateEvent } from "./counter-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let count = BigInt.fromI32(234)
    let newCounterUpdateEvent = createCounterUpdateEvent(count)
    handleCounterUpdate(newCounterUpdateEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("CounterUpdate created and stored", () => {
    assert.entityCount("CounterUpdate", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "CounterUpdate",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "count",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
