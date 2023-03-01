/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface AtomBase {
    createdBy?: DevRev.UserSummary;
    /** Timestamp when the object was created. */
    createdDate?: string;
    /** Human-readable object ID unique to the Dev organization. */
    displayId?: string;
    /** Globally unique object ID. */
    id: string;
    modifiedBy?: DevRev.UserSummary;
    /** Timestamp when the object was last modified. */
    modifiedDate?: string;
}
