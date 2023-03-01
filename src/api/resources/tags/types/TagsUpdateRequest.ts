/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * The request to update a tag.
 */
export interface TagsUpdateRequest {
    allowedValues?: DevRev.TagsUpdateAllowedValues;
    /** The updated description of the tag. */
    description?: string;
    /** The ID of the tag to update. */
    id: string;
    /**
     * The updated name of the tag. The name must be unique across all
     * tags.
     *
     */
    name?: string;
}
