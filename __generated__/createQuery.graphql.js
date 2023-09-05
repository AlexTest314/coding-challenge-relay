/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createQueryVariables = {||};
export type createQueryResponse = {|
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
export type createQuery = {|
  variables: createQueryVariables,
  response: createQueryResponse,
|};
*/


/*
query createQuery {
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
    "name": "createQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "createQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "09c205f32c03e1e7f57739358be0c04b",
    "id": null,
    "metadata": {},
    "name": "createQuery",
    "operationKind": "query",
    "text": "query createQuery {\n  viewer {\n    products {\n      id\n      name\n      description\n      category\n      price\n      createdAt\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '228fa6ebacbeadbdc3e8dfe581d15603';

module.exports = node;
