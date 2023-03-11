/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export type NotFoundErrorBody = DevRev.NotFoundErrorBody.NotFound;

export declare namespace NotFoundErrorBody {
    interface NotFound extends _Base {
        type: "not_found";
    }

    interface _Base {
        /** The message associated with the error. */
        message?: string;
    }
}
