/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DevRev from "../../../../../api";
import * as core from "../../../../../core";

export const WebhooksCreateRequest: core.serialization.Schema<
    serializers.WebhooksCreateRequest.Raw,
    DevRev.WebhooksCreateRequest
> = core.serialization.object({
    eventTypes: core.serialization.property(
        "event_types",
        core.serialization
            .list(core.serialization.lazy(async () => (await import("../../../..")).WebhookEventType))
            .optional()
    ),
    secret: core.serialization.string().optional(),
    url: core.serialization.string(),
});

export declare namespace WebhooksCreateRequest {
    interface Raw {
        event_types?: serializers.WebhookEventType.Raw[] | null;
        secret?: string | null;
        url: string;
    }
}