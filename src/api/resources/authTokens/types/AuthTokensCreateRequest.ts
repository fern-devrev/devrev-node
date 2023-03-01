/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * A request to create a new token corresponding to the requested token
 * type.
 *
 */
export interface AuthTokensCreateRequest {
    /** The expected audience values with respect to the token. */
    aud?: string[];
    /**
     * An identifier that represents the application which is requesting
     * the token. If no client_id is present in the request to generate an
     * application access token (AAT), DevRev will generate a client_id.
     * This client_id is only associated with an AAT.
     *
     */
    clientId?: string;
    /**
     * The expected validity lifetime of the token in number of days.
     *
     */
    expiresIn?: number;
    grantType?: DevRev.AuthTokenGrantType;
    requestedTokenType?: DevRev.AuthTokenRequestedTokenType;
    revInfo?: DevRev.AuthTokensRevInfo;
    /**
     * The requested set of scopes associated with the issued token. A
     * space-delimited list of values in which the order of values does
     * not matter.
     *
     */
    scope?: string;
    /**
     * Represents the entity that requests the token. Not required when
     * requesting an application access token (AAT).
     *
     */
    subjectToken?: string;
    subjectTokenType?: DevRev.AuthTokenSubjectTokenType;
    /** A hint that identifies the token. */
    tokenHint?: string;
}
