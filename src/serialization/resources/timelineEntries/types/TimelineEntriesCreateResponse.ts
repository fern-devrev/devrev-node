/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TimelineEntriesCreateResponse: core.serialization.ObjectSchema<
    serializers.TimelineEntriesCreateResponse.Raw,
    DevRev.TimelineEntriesCreateResponse
> = core.serialization.object({
    timelineEntry: core.serialization.property(
        "timeline_entry",
        core.serialization.lazyObject(async () => (await import("../../..")).TimelineEntry)
    ),
});

export declare namespace TimelineEntriesCreateResponse {
    interface Raw {
        timeline_entry: serializers.TimelineEntry.Raw;
    }
}