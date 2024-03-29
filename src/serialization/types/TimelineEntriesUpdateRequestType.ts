/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const TimelineEntriesUpdateRequestType: core.serialization.Schema<
    serializers.TimelineEntriesUpdateRequestType.Raw,
    DevRev.TimelineEntriesUpdateRequestType
> = core.serialization.enum_(["timeline_comment"]);

export declare namespace TimelineEntriesUpdateRequestType {
    type Raw = "timeline_comment";
}
