/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

/**
 * Carries info corresponding to the Rev user to be provisioned and/or
 * issue a Rev session token.
 *
 */
export interface AuthTokensRevInfo {
    /** An identifier which uniquely identifies a Rev org. */
    orgRef?: string;
    orgTraits?: DevRev.AuthTokensOrgTraits;
    /** The unique ID of the Rev user. */
    revUserId?: string;
    /** An identifier which uniquely identifies a Rev user. */
    userRef: string;
    userTraits?: DevRev.AuthTokensUserTraits;
}