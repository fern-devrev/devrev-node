/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { DevRev } from "@fern-api/devrev";

export class NotFoundError extends errors.DevRevError {
    constructor(body: DevRev.ErrorBase) {
        super({
            message: "NotFoundError",
            statusCode: 404,
            body: body,
        });
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
}