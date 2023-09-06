/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateProductInput = {|
  id: string,
  name: string,
  description: string,
  price: number,
  category: string,
  createdAt: string,
|};
export type Id_editUpdateMutationVariables = {|
  input: UpdateProductInput
|};
export type Id_editUpdateMutationResponse = {|
  +updateProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +category: string,
    +price: number,
    +createdAt: string,
  |}
|};
export type Id_editUpdateMutation = {|
  variables: Id_editUpdateMutationVariables,
  response: Id_editUpdateMutationResponse,
|};
*/


/*
mutation Id_editUpdateMutation(
  $input: UpdateProductInput!
) {
  updateProduct(input: $input) {
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
    "name": "updateProduct",
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
    "name": "Id_editUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Id_editUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c3cbcd3529881e04ecea04f667151253",
    "id": null,
    "metadata": {},
    "name": "Id_editUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation Id_editUpdateMutation(\n  $input: UpdateProductInput!\n) {\n  updateProduct(input: $input) {\n    id\n    name\n    description\n    category\n    price\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c470d69e14c6f32c2000c2ed5293a4f4';

module.exports = node;
