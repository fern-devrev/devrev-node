/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export interface TimelineEntriesCreateRequestTimelineComment {
    /** The IDs of the artifacts attached to the comment. */
    artifacts?: string[];
    /** The comment's body. */
    body?: string;
    bodyType?: DevRev.TimelineCommentBodyType;
    snapKitBody?: DevRev.TimelineSnapKitBody;
}
