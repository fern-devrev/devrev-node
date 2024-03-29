/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../..";

export interface TimelineEntriesListRequest {
    /**
     * The ID of the object to list timeline entries for.
     */
    object: string;
    /**
     * The cursor to resume iteration from. If not provided, then iteration
     * starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of entries to return. If not set, then this
     * defaults to `50`.
     *
     */
    limit?: number;
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     *
     */
    mode?: DevRev.ListMode;
    /**
     * The visibility of the timeline entries to filter for. Note this is a
     * strict filter, such that only entries with the exact visibilities
     * specified will be returned.
     *
     */
    visibility?: DevRev.TimelineEntryVisibility | DevRev.TimelineEntryVisibility[];
}
