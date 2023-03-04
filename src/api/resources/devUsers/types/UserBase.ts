/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface UserBase extends DevRev.AtomBase {
    /**
     * The user's display name. The name is non-unique and mutable.
     *
     */
    displayName?: string;
    /** Email address of the user. */
    email?: string;
    /** Full name of the user. */
    fullName?: string;
    /** Phone numbers of the user. */
    phoneNumbers?: string[];
    /** URL of the user's profile picture. */
    profilePicture?: string;
    state?: DevRev.UserState;
}