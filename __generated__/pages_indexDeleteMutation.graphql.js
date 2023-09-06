/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteProductInput = {|
  id: string
|};
export type pages_indexDeleteMutationVariables = {|
  input: DeleteProductInput
|};
export type pages_indexDeleteMutationResponse = {|
  +deleteProduct: {|
    +id: string,
    +name: string,
    +description: string,
    +category: string,
    +price: number,
    +createdAt: string,
  |}
|};
export type pages_indexDeleteMutation = {|
  variables: pages_indexDeleteMutationVariables,
  response: pages_indexDeleteMutationResponse,
|};
*/


/*
mutation pages_indexDeleteMutation(
  $input: DeleteProductInput!
) {
  deleteProduct(input: $input) {
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
    "name": "deleteProduct",
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
    "name": "pages_indexDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "pages_indexDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "1a8fe04ff8b06ad16669cc373e92f39f",
    "id": null,
    "metadata": {},
    "name": "pages_indexDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation pages_indexDeleteMutation(\n  $input: DeleteProductInput!\n) {\n  deleteProduct(input: $input) {\n    id\n    name\n    description\n    category\n    price\n    createdAt\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '49fb031528bf6338a20453d8205635d4';

module.exports = node;
