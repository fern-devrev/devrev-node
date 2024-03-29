/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const EventWebhookUpdated: core.serialization.ObjectSchema<
    serializers.EventWebhookUpdated.Raw,
    DevRev.EventWebhookUpdated
> = core.serialization.object({
    webhook: core.serialization.lazyObject(async () => (await import("..")).Webhook),
});

export declare namespace EventWebhookUpdated {
    interface Raw {
        webhook: serializers.Webhook.Raw;
    }
}
