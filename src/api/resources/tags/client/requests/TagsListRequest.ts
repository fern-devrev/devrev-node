/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface TagsListRequest {
    /**
     * The cursor to resume iteration from. If not provided, then iteration starts from the beginning.
     *
     */
    cursor?: string;
    /**
     * The maximum number of tags to return. The default is '50'.
     */
    limit?: number;
    /**
     * The iteration mode to use, otherwise if not set, then "after" is
     * used.
     *
     */
    mode?: DevRev.ListMode;
}
