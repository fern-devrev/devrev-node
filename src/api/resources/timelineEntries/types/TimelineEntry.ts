/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export type TimelineEntry = DevRev.TimelineEntry.TimelineComment;

export declare namespace TimelineEntry {
    interface TimelineComment extends DevRev.TimelineComment {
        type: "timeline_comment";
    }
}
