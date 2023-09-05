/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type Id_editQueryVariables = {||};
export type Id_editQueryResponse = {|
  +viewer: {|
    +products: $ReadOnlyArray<{|
      +id: string,
      +name: string,
      +description: string,
      +category: string,
      +price: number,
      +createdAt: string,
    |}>
  |}
|};
export type Id_editQuery = {|
  variables: Id_editQueryVariables,
  response: Id_editQueryResponse,
|};
*/


/*
query Id_editQuery {
  viewer {
    products {
      id
      name
      description
      category
      price
      createdAt
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Viewer",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Product",
        "kind": "LinkedField",
        "name": "products",
        "plural": true,
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
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Id_editQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Id_editQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "68c865953073aad9445e41b78d47d7a0",
    "id": null,
    "metadata": {},
    "name": "Id_editQuery",
    "operationKind": "query",
    "text": "query Id_editQuery {\n  viewer {\n    products {\n      id\n      name\n      description\n      category\n      price\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e021ca30e7525b6817f48eebaa0dbcaf';

module.exports = node;
