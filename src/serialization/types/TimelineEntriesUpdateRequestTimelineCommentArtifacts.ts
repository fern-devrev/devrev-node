/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const TimelineEntriesUpdateRequestTimelineCommentArtifacts: core.serialization.ObjectSchema<
    serializers.TimelineEntriesUpdateRequestTimelineCommentArtifacts.Raw,
    DevRev.TimelineEntriesUpdateRequestTimelineCommentArtifacts
> = core.serialization.object({
    add: core.serialization.list(core.serialization.string()).optional(),
    remove: core.serialization.list(core.serialization.string()).optional(),
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace TimelineEntriesUpdateRequestTimelineCommentArtifacts {
    interface Raw {
        add?: string[] | null;
        remove?: string[] | null;
        set?: string[] | null;
    }
}