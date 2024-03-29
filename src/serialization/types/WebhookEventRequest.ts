/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WebhookEventRequest: core.serialization.ObjectSchema<
    serializers.WebhookEventRequest.Raw,
    DevRev.WebhookEventRequest
> = core.serialization.object({
    id: core.serialization.string(),
    partCreated: core.serialization.property(
        "part_created",
        core.serialization.lazyObject(async () => (await import("..")).EventPartCreated).optional()
    ),
    partDeleted: core.serialization.property(
        "part_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventPartDeleted).optional()
    ),
    partUpdated: core.serialization.property(
        "part_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventPartUpdated).optional()
    ),
    revOrgCreated: core.serialization.property(
        "rev_org_created",
        core.serialization.lazyObject(async () => (await import("..")).EventRevOrgCreated).optional()
    ),
    revOrgDeleted: core.serialization.property(
        "rev_org_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventRevOrgDeleted).optional()
    ),
    revOrgUpdated: core.serialization.property(
        "rev_org_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventRevOrgUpdated).optional()
    ),
    tagCreated: core.serialization.property(
        "tag_created",
        core.serialization.lazyObject(async () => (await import("..")).EventTagCreated).optional()
    ),
    tagDeleted: core.serialization.property(
        "tag_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventTagDeleted).optional()
    ),
    tagUpdated: core.serialization.property(
        "tag_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventTagUpdated).optional()
    ),
    timelineEntryCreated: core.serialization.property(
        "timeline_entry_created",
        core.serialization.lazyObject(async () => (await import("..")).EventTimelineEntryCreated).optional()
    ),
    timelineEntryDeleted: core.serialization.property(
        "timeline_entry_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventTimelineEntryDeleted).optional()
    ),
    timelineEntryUpdated: core.serialization.property(
        "timeline_entry_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventTimelineEntryUpdated).optional()
    ),
    timestamp: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("..")).WebhookEventType).optional(),
    verify: core.serialization.lazyObject(async () => (await import("..")).WebhookEventVerify).optional(),
    webhookCreated: core.serialization.property(
        "webhook_created",
        core.serialization.lazyObject(async () => (await import("..")).EventWebhookCreated).optional()
    ),
    webhookDeleted: core.serialization.property(
        "webhook_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventWebhookDeleted).optional()
    ),
    webhookId: core.serialization.property("webhook_id", core.serialization.string()),
    webhookUpdated: core.serialization.property(
        "webhook_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventWebhookUpdated).optional()
    ),
    workCreated: core.serialization.property(
        "work_created",
        core.serialization.lazyObject(async () => (await import("..")).EventWorkCreated).optional()
    ),
    workDeleted: core.serialization.property(
        "work_deleted",
        core.serialization.lazyObject(async () => (await import("..")).EventWorkDeleted).optional()
    ),
    workUpdated: core.serialization.property(
        "work_updated",
        core.serialization.lazyObject(async () => (await import("..")).EventWorkUpdated).optional()
    ),
});

export declare namespace WebhookEventRequest {
    interface Raw {
        id: string;
        part_created?: serializers.EventPartCreated.Raw | null;
        part_deleted?: serializers.EventPartDeleted.Raw | null;
        part_updated?: serializers.EventPartUpdated.Raw | null;
        rev_org_created?: serializers.EventRevOrgCreated.Raw | null;
        rev_org_deleted?: serializers.EventRevOrgDeleted.Raw | null;
        rev_org_updated?: serializers.EventRevOrgUpdated.Raw | null;
        tag_created?: serializers.EventTagCreated.Raw | null;
        tag_deleted?: serializers.EventTagDeleted.Raw | null;
        tag_updated?: serializers.EventTagUpdated.Raw | null;
        timeline_entry_created?: serializers.EventTimelineEntryCreated.Raw | null;
        timeline_entry_deleted?: serializers.EventTimelineEntryDeleted.Raw | null;
        timeline_entry_updated?: serializers.EventTimelineEntryUpdated.Raw | null;
        timestamp?: string | null;
        type?: serializers.WebhookEventType.Raw | null;
        verify?: serializers.WebhookEventVerify.Raw | null;
        webhook_created?: serializers.EventWebhookCreated.Raw | null;
        webhook_deleted?: serializers.EventWebhookDeleted.Raw | null;
        webhook_id: string;
        webhook_updated?: serializers.EventWebhookUpdated.Raw | null;
        work_created?: serializers.EventWorkCreated.Raw | null;
        work_deleted?: serializers.EventWorkDeleted.Raw | null;
        work_updated?: serializers.EventWorkUpdated.Raw | null;
    }
}
