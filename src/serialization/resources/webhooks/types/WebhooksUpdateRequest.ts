/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const WebhooksUpdateRequest: core.serialization.ObjectSchema<
    serializers.WebhooksUpdateRequest.Raw,
    DevRev.WebhooksUpdateRequest
> = core.serialization.object({
    action: core.serialization.lazy(async () => (await import("../../..")).WebhooksUpdateAction).optional(),
    eventTypes: core.serialization.property(
        "event_types",
        core.serialization.lazyObject(async () => (await import("../../..")).WebhooksUpdateRequestEventTypes).optional()
    ),
    id: core.serialization.string(),
    secret: core.serialization.string().optional(),
    url: core.serialization.string().optional(),
});

export declare namespace WebhooksUpdateRequest {
    interface Raw {
        action?: serializers.WebhooksUpdateAction.Raw | null;
        event_types?: serializers.WebhooksUpdateRequestEventTypes.Raw | null;
        id: string;
        secret?: string | null;
        url?: string | null;
    }
}
