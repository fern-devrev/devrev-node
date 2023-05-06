/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const TimelineComment: core.serialization.ObjectSchema<serializers.TimelineComment.Raw, DevRev.TimelineComment> =
    core.serialization.object({
        artifacts: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("..")).ArtifactSummary))
            .optional(),
        body: core.serialization.string().optional(),
        bodyType: core.serialization.property(
            "body_type",
            core.serialization.lazy(async () => (await import("..")).TimelineCommentBodyType).optional()
        ),
        snapKitBody: core.serialization.property(
            "snap_kit_body",
            core.serialization.record(core.serialization.string(), core.serialization.unknown()).optional()
        ),
    });

export declare namespace TimelineComment {
    interface Raw {
        artifacts?: serializers.ArtifactSummary.Raw[] | null;
        body?: string | null;
        body_type?: serializers.TimelineCommentBodyType.Raw | null;
        snap_kit_body?: Record<string, unknown> | null;
    }
}