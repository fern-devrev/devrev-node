/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../..";

export interface DevOrgAuthConnectionsToggleRequest {
    /** ID of the authentication connection to be toggled. */
    id: string;
    toggle?: DevRev.AuthConnectionToggle;
}