/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export interface ErrorTooManyRequests {
    /**
     * The number of seconds after which the client should retry.
     *
     */
    retryAfter?: number;
    type?: DevRev.ErrorTooManyRequestsType;
}