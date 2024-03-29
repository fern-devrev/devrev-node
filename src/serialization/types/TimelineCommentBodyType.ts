/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const TimelineCommentBodyType: core.serialization.Schema<
    serializers.TimelineCommentBodyType.Raw,
    DevRev.TimelineCommentBodyType
> = core.serialization.enum_(["snap_kit", "text"]);

export declare namespace TimelineCommentBodyType {
    type Raw = "snap_kit" | "text";
}
