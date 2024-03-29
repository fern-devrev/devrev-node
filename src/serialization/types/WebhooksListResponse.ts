/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WebhooksListResponse: core.serialization.ObjectSchema<
    serializers.WebhooksListResponse.Raw,
    DevRev.WebhooksListResponse
> = core.serialization.object({
    webhooks: core.serialization.list(core.serialization.lazyObject(async () => (await import("..")).Webhook)),
});

export declare namespace WebhooksListResponse {
    interface Raw {
        webhooks: serializers.Webhook.Raw[];
    }
}
