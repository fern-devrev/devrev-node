/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TimelineEntriesCreateRequestType: core.serialization.Schema<
    serializers.TimelineEntriesCreateRequestType.Raw,
    DevRev.TimelineEntriesCreateRequestType
> = core.serialization.enum_(["timeline_comment"]);

export declare namespace TimelineEntriesCreateRequestType {
    type Raw = "timeline_comment";
}
