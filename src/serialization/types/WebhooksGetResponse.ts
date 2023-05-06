/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WebhooksGetResponse: core.serialization.ObjectSchema<
    serializers.WebhooksGetResponse.Raw,
    DevRev.WebhooksGetResponse
> = core.serialization.object({
    webhook: core.serialization.lazyObject(async () => (await import("..")).Webhook),
});

export declare namespace WebhooksGetResponse {
    interface Raw {
        webhook: serializers.Webhook.Raw;
    }
}