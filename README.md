# DevRev Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/devrev)](https://www.npmjs.com/package/@fern-api/devrev)

The DevRev Node.js library provides access to the DevRev API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://devrev.ai/docs/apis/methods#/).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-lxfqy2?file=app.ts,package.json,node_modules%2F%40fern-api%2Fdevrev%2FClient.d.ts,node_modules%2F%40fern-api%2Fdevrev%2Fenvironments.d.ts)

```typescript
import { DevRevClient } from '@fern-api/devrev';

void main();

async function main() {
  const client = new DevRevClient({
    environment: 'DevRevEnvironment',
    authorization: 'YOUR_AUTH_TOKEN',
  });

  const response = await client.parts.create({
    description: 'Description of the part',
    name: 'Name of the part',
    ownedBy: ['Users that own the part'],
    type: 'product',
  });
  console.log('Received response from DevRev!', response);
}

```

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
