/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * Response for the request to create a new token corresponding to the
 * requested token type.
 *
 */
export interface AuthTokensCreateResponse {
    /**
     * The issued JSON Web Token (JWT) corresponding to the requested
     * token type.
     *
     */
    accessToken: string;
    /**
     * An identifier that represents the application which is requesting
     * the token. Only present in a response corresponding to an
     * application access token (AAT).
     *
     */
    clientId?: string;
    /**
     * The validity lifetime of the token specified in seconds since Unix
     * epoch.
     *
     */
    expiresIn: number;
    /** A token to refresh the issued token. */
    refreshToken?: string;
    /**
     * The scopes associated with the issued token. A space-delimited list
     * of values in which the order of values does not matter.
     *
     */
    scope?: string;
    tokenType: DevRev.AuthTokenTokenType;
}
