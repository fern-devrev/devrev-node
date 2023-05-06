/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WebhooksDeleteResponse: core.serialization.Schema<
    serializers.WebhooksDeleteResponse.Raw,
    DevRev.WebhooksDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace WebhooksDeleteResponse {
    type Raw = Record<string, unknown>;
}