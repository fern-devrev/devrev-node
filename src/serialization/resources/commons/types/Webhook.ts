/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const Webhook: core.serialization.ObjectSchema<serializers.Webhook.Raw, DevRev.Webhook> = core.serialization
    .object({
        eventTypes: core.serialization.property(
            "event_types",
            core.serialization
                .list(core.serialization.lazy(async () => (await import("../../..")).WebhookEventType))
                .optional()
        ),
        secret: core.serialization.string(),
        status: core.serialization.lazy(async () => (await import("../../..")).WebhookStatus),
        url: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBase));

export declare namespace Webhook {
    interface Raw extends serializers.AtomBase.Raw {
        event_types?: serializers.WebhookEventType.Raw[] | null;
        secret: string;
        status: serializers.WebhookStatus.Raw;
        url: string;
    }
}
