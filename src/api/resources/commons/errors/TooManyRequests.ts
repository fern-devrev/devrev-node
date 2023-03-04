/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { DevRev } from "@fern-api/devrev";

export class TooManyRequests extends errors.DevRevError {
    constructor(body: DevRev.ErrorBase) {
        super({
            message: "too-many-requests",
            statusCode: 429,
            body: body,
        });
        Object.setPrototypeOf(this, TooManyRequests.prototype);
    }
}