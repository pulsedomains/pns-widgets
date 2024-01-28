export const SECONDS_PER_YEAR = 31556952

export const COMMIT_GAS_AMOUNT = 60000

export const REGISTRATION_GAS_AMOUNT = 300000

export const TOTAL_GAS_AMOUNT = REGISTRATION_GAS_AMOUNT + COMMIT_GAS_AMOUNT

export const getRegistrarAddress = (chainId: number | undefined) => {
  return chainId === 943
    ? '0xE35059d08fA35d42bb8f397F5BD6DCBAa8F37832'
    : '0xEDE92828a143cFC966a47d60604825655f7c79e8'
}

export const getResolverAddress = (chainId: number | undefined) => {
  return chainId === 943
    ? '0xDDFde3fA938dE0cdff82645579d03Ed750DE2e69'
    : '0x2FDBb906b4FE68e31D928C1ED0b6a3bD1f204374'
}

export const getReverseRegistrarAddress = (chainId: number | undefined) => {
  return chainId === 943
    ? '0xa27651bf209555A77F9F0Ab1d70415cC1EAdCc4D'
    : '0x9E0406b8a7831B6056A52938B103e48D7E5A9F69'
}

export const REGISTRAR_ABI = [
  {
    "inputs": [
      {
        "internalType": "contract BaseRegistrarImplementation",
        "name": "_base",
        "type": "address"
      },
      {
        "internalType": "contract IPriceOracle",
        "name": "_prices",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_minCommitmentAge",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_maxCommitmentAge",
        "type": "uint256"
      },
      {
        "internalType": "contract ReverseRegistrar",
        "name": "_reverseRegistrar",
        "type": "address"
      },
      {
        "internalType": "contract INameWrapper",
        "name": "_nameWrapper",
        "type": "address"
      },
      {
        "internalType": "contract PNS",
        "name": "_pns",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      }
    ],
    "name": "CommitmentTooNew",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      }
    ],
    "name": "CommitmentTooOld",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      }
    ],
    "name": "DurationTooShort",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ExcuteCallFailed",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InsufficientValue",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxCommitmentAgeTooHigh",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxCommitmentAgeTooLow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaximumBasisPoints",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "NameNotAvailable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ResolverRequiredWhenDataSupplied",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      }
    ],
    "name": "UnexpiredCommitmentExists",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "banned",
        "type": "bool"
      }
    ],
    "name": "BlacklistChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "label",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "baseCost",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "premium",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "expires",
        "type": "uint256"
      }
    ],
    "name": "NameRegistered",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "label",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cost",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "expires",
        "type": "uint256"
      }
    ],
    "name": "NameRenewed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "ReferralFeeReceived",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "MIN_REGISTRATION_DURATION",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "available",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newPrices",
        "type": "address"
      }
    ],
    "name": "changePricesFeed",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_newBasisPoints",
        "type": "uint256"
      }
    ],
    "name": "changeReferralBasisPoints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "commitment",
        "type": "bytes32"
      }
    ],
    "name": "commit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "commitments",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bool",
        "name": "_newState",
        "type": "bool"
      }
    ],
    "name": "enableReferral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "secret",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "resolver",
            "type": "address"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          },
          {
            "internalType": "bool",
            "name": "reverseRecord",
            "type": "bool"
          },
          {
            "internalType": "uint16",
            "name": "ownerControlledFuses",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          }
        ],
        "internalType": "struct IPLSRegistrarController.Registration",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "makeCommitment",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxCommitmentAge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minCommitmentAge",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "nameWrapper",
    "outputs": [
      {
        "internalType": "contract INameWrapper",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "prices",
    "outputs": [
      {
        "internalType": "contract IPriceOracle",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_token",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "recoverFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "referralEnabled",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "referralFeeBasisPoints",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "duration",
            "type": "uint256"
          },
          {
            "internalType": "bytes32",
            "name": "secret",
            "type": "bytes32"
          },
          {
            "internalType": "address",
            "name": "resolver",
            "type": "address"
          },
          {
            "internalType": "bytes[]",
            "name": "data",
            "type": "bytes[]"
          },
          {
            "internalType": "bool",
            "name": "reverseRecord",
            "type": "bool"
          },
          {
            "internalType": "uint16",
            "name": "ownerControlledFuses",
            "type": "uint16"
          },
          {
            "internalType": "address",
            "name": "referrer",
            "type": "address"
          }
        ],
        "internalType": "struct IPLSRegistrarController.Registration",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "register",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      }
    ],
    "name": "renew",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "duration",
        "type": "uint256"
      }
    ],
    "name": "rentPrice",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "base",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "premium",
            "type": "uint256"
          }
        ],
        "internalType": "struct IPriceOracle.Price",
        "name": "price",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "reverseRegistrar",
    "outputs": [
      {
        "internalType": "contract ReverseRegistrar",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "isBlacklist",
        "type": "bool"
      }
    ],
    "name": "setReferrerBlacklist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceID",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "name": "valid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "withdraw",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const

export const REVERSE_REGISTRAR_ABI = [
  {
    inputs: [{ internalType: 'string', name: 'name', type: 'string' }],
    name: 'setName',
    outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const
