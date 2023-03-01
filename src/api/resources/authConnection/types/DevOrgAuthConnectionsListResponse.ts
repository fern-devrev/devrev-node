/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * Response object for the request to list all the social and enterprise
 * authentication connections configured for a Dev organization.
 *
 */
export interface DevOrgAuthConnectionsListResponse {
    /**
     * List of all the authentication connections currently configured for
     * a Dev organization.
     *
     */
    authConnections: DevRev.AuthConnection[];
}
