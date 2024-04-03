import {
  prepareEvent,
  prepareContractCall,
  readContract,
  type BaseTransactionOptions,
  type AbiParameterToPrimitiveType,
} from "thirdweb";

/**
* Contract events
*/



/**
 * Creates an event object for the CounterUpdate event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { counterUpdateEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  counterUpdateEvent()
 * ],
 * });
 * ```
 */ 
export function counterUpdateEvent() {
  return prepareEvent({
    signature: "event CounterUpdate(uint256 count)",
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "count" function on the contract.
 * @param options - The options for the count function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { count } from "TODO";
 * 
 * const result = await count();
 * 
 * ```
 */
export async function count(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x06661abd",
  [],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: []
  });
};


/**
* Contract write functions
*/



/**
 * Calls the "increment" function on the contract.
 * @param options - The options for the "increment" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { increment } from "TODO";
 * 
 * const transaction = increment();
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function increment(
  options: BaseTransactionOptions
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd09de08a",
  [],
  []
],
    params: []
  });
};


/**
 * Represents the parameters for the "setCount" function.
 */
export type SetCountParams = {
  newCount: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"newCount","type":"uint256"}>
};

/**
 * Calls the "setCount" function on the contract.
 * @param options - The options for the "setCount" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { setCount } from "TODO";
 * 
 * const transaction = setCount({
 *  newCount: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function setCount(
  options: BaseTransactionOptions<SetCountParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd14e62b8",
  [
    {
      "internalType": "uint256",
      "name": "newCount",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.newCount]
  });
};


