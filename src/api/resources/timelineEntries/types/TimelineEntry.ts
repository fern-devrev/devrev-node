/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export type TimelineEntry = DevRev.TimelineEntry.TimelineComment | DevRev.TimelineEntry._Unknown;

export declare namespace TimelineEntry {
    interface TimelineComment extends DevRev.TimelineComment {
        type: "timeline_comment";
    }

    interface _Unknown {
        type: void;
    }

    interface _Visitor<_Result> {
        timelineComment: (value: DevRev.TimelineComment) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}
