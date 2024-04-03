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
 * Represents the filters for the "ApplicationSubmitted" event.
 */
export type ApplicationSubmittedEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"listingId","type":"uint256"}>
applicationId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"applicationId","type":"uint256"}>
candidate: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"candidate","type":"address"}>
}>;

/**
 * Creates an event object for the ApplicationSubmitted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { applicationSubmittedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  applicationSubmittedEvent({
 *  listingId: ...,
 *  applicationId: ...,
 *  candidate: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function applicationSubmittedEvent(filters: ApplicationSubmittedEventFilters = {}) {
  return prepareEvent({
    signature: "event ApplicationSubmitted(uint256 indexed listingId, uint256 indexed applicationId, address indexed candidate, string proposalHash)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ConnectionAccepted" event.
 */
export type ConnectionAcceptedEventFilters = Partial<{
  sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
}>;

/**
 * Creates an event object for the ConnectionAccepted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { connectionAcceptedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  connectionAcceptedEvent({
 *  sender: ...,
 *  recipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function connectionAcceptedEvent(filters: ConnectionAcceptedEventFilters = {}) {
  return prepareEvent({
    signature: "event ConnectionAccepted(address indexed sender, address indexed recipient)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ConnectionRequest" event.
 */
export type ConnectionRequestEventFilters = Partial<{
  sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
}>;

/**
 * Creates an event object for the ConnectionRequest event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { connectionRequestEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  connectionRequestEvent({
 *  sender: ...,
 *  recipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function connectionRequestEvent(filters: ConnectionRequestEventFilters = {}) {
  return prepareEvent({
    signature: "event ConnectionRequest(address indexed sender, address indexed recipient)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ListingFulfilled" event.
 */
export type ListingFulfilledEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"listingId","type":"uint256"}>
selectedJobSeeker: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"selectedJobSeeker","type":"address"}>
}>;

/**
 * Creates an event object for the ListingFulfilled event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { listingFulfilledEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  listingFulfilledEvent({
 *  listingId: ...,
 *  selectedJobSeeker: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function listingFulfilledEvent(filters: ListingFulfilledEventFilters = {}) {
  return prepareEvent({
    signature: "event ListingFulfilled(uint256 indexed listingId, address indexed selectedJobSeeker)",
    filters,
  });
};
  

/**
 * Represents the filters for the "ListingPosted" event.
 */
export type ListingPostedEventFilters = Partial<{
  listingId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"listingId","type":"uint256"}>
provider: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"provider","type":"address"}>
}>;

/**
 * Creates an event object for the ListingPosted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { listingPostedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  listingPostedEvent({
 *  listingId: ...,
 *  provider: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function listingPostedEvent(filters: ListingPostedEventFilters = {}) {
  return prepareEvent({
    signature: "event ListingPosted(uint256 indexed listingId, address indexed provider, string title, string descriptionHash, uint256 rewardPool, string location, string longitude, string latitude)",
    filters,
  });
};
  

/**
 * Represents the filters for the "PostCreated" event.
 */
export type PostCreatedEventFilters = Partial<{
  author: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"author","type":"address"}>
postId: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"uint256","name":"postId","type":"uint256"}>
}>;

/**
 * Creates an event object for the PostCreated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { postCreatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  postCreatedEvent({
 *  author: ...,
 *  postId: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function postCreatedEvent(filters: PostCreatedEventFilters = {}) {
  return prepareEvent({
    signature: "event PostCreated(address indexed author, uint256 indexed postId, string content, string mediaHash)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RewardWithdrawn" event.
 */
export type RewardWithdrawnEventFilters = Partial<{
  recipient: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"recipient","type":"address"}>
}>;

/**
 * Creates an event object for the RewardWithdrawn event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { rewardWithdrawnEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  rewardWithdrawnEvent({
 *  recipient: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function rewardWithdrawnEvent(filters: RewardWithdrawnEventFilters = {}) {
  return prepareEvent({
    signature: "event RewardWithdrawn(address indexed recipient, uint256 amount)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleAdminChanged" event.
 */
export type RoleAdminChangedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
previousAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"}>
newAdminRole: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}>
}>;

/**
 * Creates an event object for the RoleAdminChanged event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleAdminChangedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleAdminChangedEvent({
 *  role: ...,
 *  previousAdminRole: ...,
 *  newAdminRole: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleAdminChangedEvent(filters: RoleAdminChangedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleGranted" event.
 */
export type RoleGrantedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleGranted event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleGrantedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleGrantedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleGrantedEvent(filters: RoleGrantedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "RoleRevoked" event.
 */
export type RoleRevokedEventFilters = Partial<{
  role: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"account","type":"address"}>
sender: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"sender","type":"address"}>
}>;

/**
 * Creates an event object for the RoleRevoked event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { roleRevokedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  roleRevokedEvent({
 *  role: ...,
 *  account: ...,
 *  sender: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function roleRevokedEvent(filters: RoleRevokedEventFilters = {}) {
  return prepareEvent({
    signature: "event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)",
    filters,
  });
};
  

/**
 * Represents the filters for the "SkillEndorsed" event.
 */
export type SkillEndorsedEventFilters = Partial<{
  endorser: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"endorser","type":"address"}>
endorsee: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"endorsee","type":"address"}>
}>;

/**
 * Creates an event object for the SkillEndorsed event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { skillEndorsedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  skillEndorsedEvent({
 *  endorser: ...,
 *  endorsee: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function skillEndorsedEvent(filters: SkillEndorsedEventFilters = {}) {
  return prepareEvent({
    signature: "event SkillEndorsed(address indexed endorser, address indexed endorsee, string skill)",
    filters,
  });
};
  

/**
 * Represents the filters for the "UserProfileCreated" event.
 */
export type UserProfileCreatedEventFilters = Partial<{
  userAddress: AbiParameterToPrimitiveType<{"indexed":true,"internalType":"address","name":"userAddress","type":"address"}>
}>;

/**
 * Creates an event object for the UserProfileCreated event.
 * @param filters - Optional filters to apply to the event.
 * @returns The prepared event object.
 * @example
 * ```
 * import { getContractEvents } from "thirdweb";
 * import { userProfileCreatedEvent } from "TODO";
 * 
 * const events = await getContractEvents({
 * contract,
 * events: [
 *  userProfileCreatedEvent({
 *  userAddress: ...,
 * })
 * ],
 * });
 * ```
 */ 
export function userProfileCreatedEvent(filters: UserProfileCreatedEventFilters = {}) {
  return prepareEvent({
    signature: "event UserProfileCreated(address indexed userAddress, string name)",
    filters,
  });
};
  

/**
* Contract read functions
*/



/**
 * Calls the "DEFAULT_ADMIN_ROLE" function on the contract.
 * @param options - The options for the DEFAULT_ADMIN_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { DEFAULT_ADMIN_ROLE } from "TODO";
 * 
 * const result = await DEFAULT_ADMIN_ROLE();
 * 
 * ```
 */
export async function DEFAULT_ADMIN_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xa217fddf",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "JOB_SEEKER_ROLE" function on the contract.
 * @param options - The options for the JOB_SEEKER_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { JOB_SEEKER_ROLE } from "TODO";
 * 
 * const result = await JOB_SEEKER_ROLE();
 * 
 * ```
 */
export async function JOB_SEEKER_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x3da84167",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "PROVIDER_ROLE" function on the contract.
 * @param options - The options for the PROVIDER_ROLE function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { PROVIDER_ROLE } from "TODO";
 * 
 * const result = await PROVIDER_ROLE();
 * 
 * ```
 */
export async function PROVIDER_ROLE(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x24c20a34",
  [],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: []
  });
};




/**
 * Calls the "getAllListings" function on the contract.
 * @param options - The options for the getAllListings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getAllListings } from "TODO";
 * 
 * const result = await getAllListings();
 * 
 * ```
 */
export async function getAllListings(
  options: BaseTransactionOptions
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xae73ccec",
  [],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address payable",
          "name": "provider",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "title",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "descriptionHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "rewardPool",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "applicationCount",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "completed",
          "type": "bool"
        },
        {
          "internalType": "address payable",
          "name": "selectedJobSeeker",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "createdAt",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "location",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "longitude",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "latitude",
          "type": "string"
        }
      ],
      "internalType": "struct ChainedIn.ListingInfo[]",
      "name": "",
      "type": "tuple[]"
    }
  ]
],
    params: []
  });
};


/**
 * Represents the parameters for the "getRoleAdmin" function.
 */
export type GetRoleAdminParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
};

/**
 * Calls the "getRoleAdmin" function on the contract.
 * @param options - The options for the getRoleAdmin function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getRoleAdmin } from "TODO";
 * 
 * const result = await getRoleAdmin({
 *  role: ...,
 * });
 * 
 * ```
 */
export async function getRoleAdmin(
  options: BaseTransactionOptions<GetRoleAdminParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x248a9ca3",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    }
  ],
  [
    {
      "internalType": "bytes32",
      "name": "",
      "type": "bytes32"
    }
  ]
],
    params: [options.role]
  });
};


/**
 * Represents the parameters for the "getUserPosts" function.
 */
export type GetUserPostsParams = {
  userAddress: AbiParameterToPrimitiveType<{"internalType":"address","name":"userAddress","type":"address"}>
};

/**
 * Calls the "getUserPosts" function on the contract.
 * @param options - The options for the getUserPosts function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { getUserPosts } from "TODO";
 * 
 * const result = await getUserPosts({
 *  userAddress: ...,
 * });
 * 
 * ```
 */
export async function getUserPosts(
  options: BaseTransactionOptions<GetUserPostsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x9a2194a9",
  [
    {
      "internalType": "address",
      "name": "userAddress",
      "type": "address"
    }
  ],
  [
    {
      "components": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "author",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "content",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "mediaHash",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "timestamp",
          "type": "uint256"
        }
      ],
      "internalType": "struct ChainedIn.PostInfo[]",
      "name": "",
      "type": "tuple[]"
    }
  ]
],
    params: [options.userAddress]
  });
};


/**
 * Represents the parameters for the "hasRole" function.
 */
export type HasRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "hasRole" function on the contract.
 * @param options - The options for the hasRole function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { hasRole } from "TODO";
 * 
 * const result = await hasRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * ```
 */
export async function hasRole(
  options: BaseTransactionOptions<HasRoleParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x91d14854",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "listings" function.
 */
export type ListingsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "listings" function on the contract.
 * @param options - The options for the listings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { listings } from "TODO";
 * 
 * const result = await listings({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function listings(
  options: BaseTransactionOptions<ListingsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0xde74e57b",
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    },
    {
      "internalType": "address payable",
      "name": "provider",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "title",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "location",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "descriptionHash",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "rewardPool",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "applicationCount",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "createdAt",
      "type": "uint256"
    },
    {
      "internalType": "bool",
      "name": "completed",
      "type": "bool"
    },
    {
      "internalType": "address payable",
      "name": "selectedJobSeeker",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "longitude",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "latitude",
      "type": "string"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
 * Represents the parameters for the "supportsInterface" function.
 */
export type SupportsInterfaceParams = {
  interfaceId: AbiParameterToPrimitiveType<{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}>
};

/**
 * Calls the "supportsInterface" function on the contract.
 * @param options - The options for the supportsInterface function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { supportsInterface } from "TODO";
 * 
 * const result = await supportsInterface({
 *  interfaceId: ...,
 * });
 * 
 * ```
 */
export async function supportsInterface(
  options: BaseTransactionOptions<SupportsInterfaceParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x01ffc9a7",
  [
    {
      "internalType": "bytes4",
      "name": "interfaceId",
      "type": "bytes4"
    }
  ],
  [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ]
],
    params: [options.interfaceId]
  });
};


/**
 * Represents the parameters for the "userApplications" function.
 */
export type UserApplicationsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "userApplications" function on the contract.
 * @param options - The options for the userApplications function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { userApplications } from "TODO";
 * 
 * const result = await userApplications({
 *  arg_0: ...,
 *  arg_1: ...,
 * });
 * 
 * ```
 */
export async function userApplications(
  options: BaseTransactionOptions<UserApplicationsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x0d395eb9",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0, options.arg_1]
  });
};


/**
 * Represents the parameters for the "userListings" function.
 */
export type UserListingsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "userListings" function on the contract.
 * @param options - The options for the userListings function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { userListings } from "TODO";
 * 
 * const result = await userListings({
 *  arg_0: ...,
 *  arg_1: ...,
 * });
 * 
 * ```
 */
export async function userListings(
  options: BaseTransactionOptions<UserListingsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x86cfa7d3",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0, options.arg_1]
  });
};


/**
 * Represents the parameters for the "userPosts" function.
 */
export type UserPostsParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
arg_1: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"","type":"uint256"}>
};

/**
 * Calls the "userPosts" function on the contract.
 * @param options - The options for the userPosts function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { userPosts } from "TODO";
 * 
 * const result = await userPosts({
 *  arg_0: ...,
 *  arg_1: ...,
 * });
 * 
 * ```
 */
export async function userPosts(
  options: BaseTransactionOptions<UserPostsParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x8064d149",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    },
    {
      "internalType": "uint256",
      "name": "",
      "type": "uint256"
    }
  ],
  [
    {
      "internalType": "uint256",
      "name": "id",
      "type": "uint256"
    },
    {
      "internalType": "address",
      "name": "author",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "content",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "mediaHash",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "timestamp",
      "type": "uint256"
    }
  ]
],
    params: [options.arg_0, options.arg_1]
  });
};


/**
 * Represents the parameters for the "userProfiles" function.
 */
export type UserProfilesParams = {
  arg_0: AbiParameterToPrimitiveType<{"internalType":"address","name":"","type":"address"}>
};

/**
 * Calls the "userProfiles" function on the contract.
 * @param options - The options for the userProfiles function.
 * @returns The parsed result of the function call.
 * @example
 * ```
 * import { userProfiles } from "TODO";
 * 
 * const result = await userProfiles({
 *  arg_0: ...,
 * });
 * 
 * ```
 */
export async function userProfiles(
  options: BaseTransactionOptions<UserProfilesParams>
) {
  return readContract({
    contract: options.contract,
    method: [
  "0x332d56d7",
  [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  [
    {
      "internalType": "address",
      "name": "userAddress",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "bioHash",
      "type": "string"
    }
  ]
],
    params: [options.arg_0]
  });
};


/**
* Contract write functions
*/

/**
 * Represents the parameters for the "acceptConnectionRequest" function.
 */
export type AcceptConnectionRequestParams = {
  sender: AbiParameterToPrimitiveType<{"internalType":"address","name":"_sender","type":"address"}>
};

/**
 * Calls the "acceptConnectionRequest" function on the contract.
 * @param options - The options for the "acceptConnectionRequest" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { acceptConnectionRequest } from "TODO";
 * 
 * const transaction = acceptConnectionRequest({
 *  sender: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function acceptConnectionRequest(
  options: BaseTransactionOptions<AcceptConnectionRequestParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x769c9636",
  [
    {
      "internalType": "address",
      "name": "_sender",
      "type": "address"
    }
  ],
  []
],
    params: [options.sender]
  });
};


/**
 * Represents the parameters for the "applyForListing" function.
 */
export type ApplyForListingParams = {
  listingId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"listingId","type":"uint256"}>
proposalHash: AbiParameterToPrimitiveType<{"internalType":"string","name":"proposalHash","type":"string"}>
};

/**
 * Calls the "applyForListing" function on the contract.
 * @param options - The options for the "applyForListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { applyForListing } from "TODO";
 * 
 * const transaction = applyForListing({
 *  listingId: ...,
 *  proposalHash: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function applyForListing(
  options: BaseTransactionOptions<ApplyForListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd21047b1",
  [
    {
      "internalType": "uint256",
      "name": "listingId",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "proposalHash",
      "type": "string"
    }
  ],
  []
],
    params: [options.listingId, options.proposalHash]
  });
};


/**
 * Represents the parameters for the "createPost" function.
 */
export type CreatePostParams = {
  content: AbiParameterToPrimitiveType<{"internalType":"string","name":"content","type":"string"}>
mediaHash: AbiParameterToPrimitiveType<{"internalType":"string","name":"mediaHash","type":"string"}>
};

/**
 * Calls the "createPost" function on the contract.
 * @param options - The options for the "createPost" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createPost } from "TODO";
 * 
 * const transaction = createPost({
 *  content: ...,
 *  mediaHash: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createPost(
  options: BaseTransactionOptions<CreatePostParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x392338f5",
  [
    {
      "internalType": "string",
      "name": "content",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "mediaHash",
      "type": "string"
    }
  ],
  []
],
    params: [options.content, options.mediaHash]
  });
};


/**
 * Represents the parameters for the "createUserProfile" function.
 */
export type CreateUserProfileParams = {
  name: AbiParameterToPrimitiveType<{"internalType":"string","name":"name","type":"string"}>
bioHash: AbiParameterToPrimitiveType<{"internalType":"string","name":"bioHash","type":"string"}>
skills: AbiParameterToPrimitiveType<{"internalType":"string[]","name":"skills","type":"string[]"}>
experience: AbiParameterToPrimitiveType<{"internalType":"string[]","name":"experience","type":"string[]"}>
education: AbiParameterToPrimitiveType<{"internalType":"string[]","name":"education","type":"string[]"}>
};

/**
 * Calls the "createUserProfile" function on the contract.
 * @param options - The options for the "createUserProfile" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { createUserProfile } from "TODO";
 * 
 * const transaction = createUserProfile({
 *  name: ...,
 *  bioHash: ...,
 *  skills: ...,
 *  experience: ...,
 *  education: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function createUserProfile(
  options: BaseTransactionOptions<CreateUserProfileParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x3e0881ac",
  [
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "bioHash",
      "type": "string"
    },
    {
      "internalType": "string[]",
      "name": "skills",
      "type": "string[]"
    },
    {
      "internalType": "string[]",
      "name": "experience",
      "type": "string[]"
    },
    {
      "internalType": "string[]",
      "name": "education",
      "type": "string[]"
    }
  ],
  []
],
    params: [options.name, options.bioHash, options.skills, options.experience, options.education]
  });
};


/**
 * Represents the parameters for the "endorseSkill" function.
 */
export type EndorseSkillParams = {
  endorsee: AbiParameterToPrimitiveType<{"internalType":"address","name":"_endorsee","type":"address"}>
skill: AbiParameterToPrimitiveType<{"internalType":"string","name":"_skill","type":"string"}>
};

/**
 * Calls the "endorseSkill" function on the contract.
 * @param options - The options for the "endorseSkill" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { endorseSkill } from "TODO";
 * 
 * const transaction = endorseSkill({
 *  endorsee: ...,
 *  skill: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function endorseSkill(
  options: BaseTransactionOptions<EndorseSkillParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xab9ff55d",
  [
    {
      "internalType": "address",
      "name": "_endorsee",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "_skill",
      "type": "string"
    }
  ],
  []
],
    params: [options.endorsee, options.skill]
  });
};


/**
 * Represents the parameters for the "fulfillListing" function.
 */
export type FulfillListingParams = {
  listingId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"listingId","type":"uint256"}>
applicationId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"applicationId","type":"uint256"}>
};

/**
 * Calls the "fulfillListing" function on the contract.
 * @param options - The options for the "fulfillListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { fulfillListing } from "TODO";
 * 
 * const transaction = fulfillListing({
 *  listingId: ...,
 *  applicationId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function fulfillListing(
  options: BaseTransactionOptions<FulfillListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x449cfc8f",
  [
    {
      "internalType": "uint256",
      "name": "listingId",
      "type": "uint256"
    },
    {
      "internalType": "uint256",
      "name": "applicationId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.listingId, options.applicationId]
  });
};


/**
 * Represents the parameters for the "grantJobSeekerRole" function.
 */
export type GrantJobSeekerRoleParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "grantJobSeekerRole" function on the contract.
 * @param options - The options for the "grantJobSeekerRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantJobSeekerRole } from "TODO";
 * 
 * const transaction = grantJobSeekerRole({
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function grantJobSeekerRole(
  options: BaseTransactionOptions<GrantJobSeekerRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x20e312bb",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "grantProviderRole" function.
 */
export type GrantProviderRoleParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "grantProviderRole" function on the contract.
 * @param options - The options for the "grantProviderRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantProviderRole } from "TODO";
 * 
 * const transaction = grantProviderRole({
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function grantProviderRole(
  options: BaseTransactionOptions<GrantProviderRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x0d8dcd59",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "grantRole" function.
 */
export type GrantRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "grantRole" function on the contract.
 * @param options - The options for the "grantRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { grantRole } from "TODO";
 * 
 * const transaction = grantRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function grantRole(
  options: BaseTransactionOptions<GrantRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x2f2ff15d",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "postListing" function.
 */
export type PostListingParams = {
  title: AbiParameterToPrimitiveType<{"internalType":"string","name":"title","type":"string"}>
descriptionHash: AbiParameterToPrimitiveType<{"internalType":"string","name":"descriptionHash","type":"string"}>
rewardPool: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"rewardPool","type":"uint256"}>
location: AbiParameterToPrimitiveType<{"internalType":"string","name":"location","type":"string"}>
longitude: AbiParameterToPrimitiveType<{"internalType":"string","name":"longitude","type":"string"}>
latitude: AbiParameterToPrimitiveType<{"internalType":"string","name":"latitude","type":"string"}>
};

/**
 * Calls the "postListing" function on the contract.
 * @param options - The options for the "postListing" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { postListing } from "TODO";
 * 
 * const transaction = postListing({
 *  title: ...,
 *  descriptionHash: ...,
 *  rewardPool: ...,
 *  location: ...,
 *  longitude: ...,
 *  latitude: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function postListing(
  options: BaseTransactionOptions<PostListingParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x42713413",
  [
    {
      "internalType": "string",
      "name": "title",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "descriptionHash",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "rewardPool",
      "type": "uint256"
    },
    {
      "internalType": "string",
      "name": "location",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "longitude",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "latitude",
      "type": "string"
    }
  ],
  []
],
    params: [options.title, options.descriptionHash, options.rewardPool, options.location, options.longitude, options.latitude]
  });
};


/**
 * Represents the parameters for the "renounceRole" function.
 */
export type RenounceRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
callerConfirmation: AbiParameterToPrimitiveType<{"internalType":"address","name":"callerConfirmation","type":"address"}>
};

/**
 * Calls the "renounceRole" function on the contract.
 * @param options - The options for the "renounceRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { renounceRole } from "TODO";
 * 
 * const transaction = renounceRole({
 *  role: ...,
 *  callerConfirmation: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function renounceRole(
  options: BaseTransactionOptions<RenounceRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x36568abe",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "callerConfirmation",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.callerConfirmation]
  });
};


/**
 * Represents the parameters for the "revokeJobSeekerRole" function.
 */
export type RevokeJobSeekerRoleParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "revokeJobSeekerRole" function on the contract.
 * @param options - The options for the "revokeJobSeekerRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeJobSeekerRole } from "TODO";
 * 
 * const transaction = revokeJobSeekerRole({
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeJobSeekerRole(
  options: BaseTransactionOptions<RevokeJobSeekerRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xe4001a9c",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "revokeProviderRole" function.
 */
export type RevokeProviderRoleParams = {
  account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "revokeProviderRole" function on the contract.
 * @param options - The options for the "revokeProviderRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeProviderRole } from "TODO";
 * 
 * const transaction = revokeProviderRole({
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeProviderRole(
  options: BaseTransactionOptions<RevokeProviderRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x9e68cc81",
  [
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.account]
  });
};


/**
 * Represents the parameters for the "revokeRole" function.
 */
export type RevokeRoleParams = {
  role: AbiParameterToPrimitiveType<{"internalType":"bytes32","name":"role","type":"bytes32"}>
account: AbiParameterToPrimitiveType<{"internalType":"address","name":"account","type":"address"}>
};

/**
 * Calls the "revokeRole" function on the contract.
 * @param options - The options for the "revokeRole" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { revokeRole } from "TODO";
 * 
 * const transaction = revokeRole({
 *  role: ...,
 *  account: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function revokeRole(
  options: BaseTransactionOptions<RevokeRoleParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0xd547741f",
  [
    {
      "internalType": "bytes32",
      "name": "role",
      "type": "bytes32"
    },
    {
      "internalType": "address",
      "name": "account",
      "type": "address"
    }
  ],
  []
],
    params: [options.role, options.account]
  });
};


/**
 * Represents the parameters for the "sendConnectionRequest" function.
 */
export type SendConnectionRequestParams = {
  recipient: AbiParameterToPrimitiveType<{"internalType":"address","name":"_recipient","type":"address"}>
};

/**
 * Calls the "sendConnectionRequest" function on the contract.
 * @param options - The options for the "sendConnectionRequest" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { sendConnectionRequest } from "TODO";
 * 
 * const transaction = sendConnectionRequest({
 *  recipient: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function sendConnectionRequest(
  options: BaseTransactionOptions<SendConnectionRequestParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x62bdd95f",
  [
    {
      "internalType": "address",
      "name": "_recipient",
      "type": "address"
    }
  ],
  []
],
    params: [options.recipient]
  });
};


/**
 * Represents the parameters for the "withdrawReward" function.
 */
export type WithdrawRewardParams = {
  listingId: AbiParameterToPrimitiveType<{"internalType":"uint256","name":"listingId","type":"uint256"}>
};

/**
 * Calls the "withdrawReward" function on the contract.
 * @param options - The options for the "withdrawReward" function.
 * @returns A prepared transaction object.
 * @example
 * ```
 * import { withdrawReward } from "TODO";
 * 
 * const transaction = withdrawReward({
 *  listingId: ...,
 * });
 * 
 * // Send the transaction
 * ...
 * 
 * ```
 */
export function withdrawReward(
  options: BaseTransactionOptions<WithdrawRewardParams>
) {
  return prepareContractCall({
    contract: options.contract,
    method: [
  "0x523a3f08",
  [
    {
      "internalType": "uint256",
      "name": "listingId",
      "type": "uint256"
    }
  ],
  []
],
    params: [options.listingId]
  });
};


