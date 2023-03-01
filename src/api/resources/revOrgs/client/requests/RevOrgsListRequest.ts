/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface RevOrgsListRequest {
    /**
     * Filters for objects created after the provided timestamp (inclusive).
     *
     */
    createdDateAfter?: string;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     *
     */
    createdDateBefore?: string;
    /**
     * The cursor to resume iteration from. If not provided, then iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of Rev organizations to be retrieved per page.
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
     * Filters for objects created after the provided timestamp (inclusive).
     *
     */
    modifiedDateAfter?: string;
    /**
     * Filters for objects created before the provided timestamp
     * (inclusive).
     *
     */
    modifiedDateBefore?: string;
}