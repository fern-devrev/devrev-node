/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const EventWebhookDeleted: core.serialization.ObjectSchema<
    serializers.EventWebhookDeleted.Raw,
    DevRev.EventWebhookDeleted
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace EventWebhookDeleted {
    interface Raw {
        id: string;
    }
}
