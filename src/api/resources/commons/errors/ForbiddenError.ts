/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { DevRev } from "@fern-api/devrev";

export class ForbiddenError extends errors.DevRevError {
    constructor(body: DevRev.ErrorBase) {
        super({
            message: "ForbiddenError",
            statusCode: 403,
            body: body,
        });
        Object.setPrototypeOf(this, ForbiddenError.prototype);
    }
}
