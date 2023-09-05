/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateProductInput = {|
  name: string,
  category: string,
  description: string,
  price: number,
  createdAt: string,
|};
export type createMutationVariables = {|
  input: CreateProductInput
|};
export type createMutationResponse = {|
  +createProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +category: string,
    +price: number,
    +createdAt: string,
  |}
|};
export type createMutation = {|
  variables: createMutationVariables,
  response: createMutationResponse,
|};
*/


/*
mutation createMutation(
  $input: CreateProductInput!
) {
  createProduct(input: $input) {
    id
    name
    description
    category
    price
    createdAt
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "createProduct",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ed8a741cbe6ca0f2533d5656f528cfc6",
    "id": null,
    "metadata": {},
    "name": "createMutation",
    "operationKind": "mutation",
    "text": "mutation createMutation(\n  $input: CreateProductInput!\n) {\n  createProduct(input: $input) {\n    id\n    name\n    description\n    category\n    price\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba17d25427273b5d0ff25c15fda4200f';

module.exports = node;
