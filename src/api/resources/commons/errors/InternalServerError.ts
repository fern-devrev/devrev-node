/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../../../errors";
import { DevRev } from "@fern-api/devrev";

export class InternalServerError extends errors.DevRevError {
    constructor(body: DevRev.InternalServerErrorErrorBody) {
        super({
            message: "internal-server-error",
            statusCode: 500,
            body: body,
        });
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
