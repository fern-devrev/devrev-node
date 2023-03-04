![devrev image](./static/hero.png)

# DevRev Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/devrev)](https://www.npmjs.com/package/@fern-api/devrev)

The DevRev Node.js library provides access to the DevRev API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://devrev.ai/docs/apis/methods#/).

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-lxfqy2?file=app.ts)

```typescript
import { DevRevClient } from '@fern-api/devrev';

const client = new DevRevClient({
  environment: 'DevRevEnvironment',
  authorization: 'YOUR_AUTH_TOKEN',
});

const createIssueResponse = await client.works.create({
  type: 'issue',
  priority: DevRev.IssuePriority.P0,
  appliesToPart: 'product',
  title: 'My issue',
  ownedBy: ['bob'],
});
console.log('Created issue!', createIssueResponse);
```

## Handling errors

When the API returns a non-success status code (4xx or 5xx response), a subclass of [DevRevError](https://github.com/fern-devrev/devrev-node/blob/main/src/errors/DevRevError.ts) will be thrown:

```ts
try {
  await client.parts.list()
} catch (err) {
  if (err instanceof DevRevError) {
    console.log(err.statusCode); // 400
    console.log(err.message); // "BadRequestError"
    console.log(err.body.message);
  }
}
```

Error codes are as followed:

| Status Code | Error Type                 |
| ----------- | -------------------------- |
| 400         | `BadRequest`               |
| 401         | `Unauthorized`             |
| 403         | `Forbidden`                |
| 404         | `NotFound`                 |
| 429         | `TooManyRequests`          |
| 500         | `InternalServerError`      |
| 503         | `ServiceUnavailable`       |

## Beta status

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning the package version to a specific version in your package.json file. This way, you can install the same version each time without breaking changes unless you are intentionally looking for the latest version.

## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
