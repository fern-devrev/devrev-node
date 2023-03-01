/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TimelineEntriesUpdateResponse: core.serialization.ObjectSchema<
    serializers.TimelineEntriesUpdateResponse.Raw,
    DevRev.TimelineEntriesUpdateResponse
> = core.serialization.object({
    timelineEntry: core.serialization.property(
        "timeline_entry",
        core.serialization.lazyObject(async () => (await import("../../..")).TimelineEntry)
    ),
});

export declare namespace TimelineEntriesUpdateResponse {
    interface Raw {
        timeline_entry: serializers.TimelineEntry.Raw;
    }
}