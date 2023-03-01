/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TimelineEntriesCreateRequestTimelineComment: core.serialization.ObjectSchema<
    serializers.TimelineEntriesCreateRequestTimelineComment.Raw,
    DevRev.TimelineEntriesCreateRequestTimelineComment
> = core.serialization.object({
    body: core.serialization.string().optional(),
    bodyType: core.serialization.property(
        "body_type",
        core.serialization.lazy(async () => (await import("../../..")).TimelineCommentBodyType).optional()
    ),
    snapKitBody: core.serialization.property(
        "snap_kit_body",
        core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
    ),
});

export declare namespace TimelineEntriesCreateRequestTimelineComment {
    interface Raw {
        body?: string | null;
        body_type?: serializers.TimelineCommentBodyType.Raw | null;
        snap_kit_body?: Record<string, unknown> | null;
    }
}
