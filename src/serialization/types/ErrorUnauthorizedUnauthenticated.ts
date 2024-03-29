/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const ErrorUnauthorizedUnauthenticated: core.serialization.Schema<
    serializers.ErrorUnauthorizedUnauthenticated.Raw,
    DevRev.ErrorUnauthorizedUnauthenticated
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace ErrorUnauthorizedUnauthenticated {
    type Raw = Record<string, unknown>;
}
