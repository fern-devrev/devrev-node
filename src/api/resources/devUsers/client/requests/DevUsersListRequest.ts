/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../..";

export interface DevUsersListRequest {
    cursor?: string;
    email?: string | string[];
    limit?: number;
    mode?: DevRev.ListMode;
    sortBy?: string | string[];
    state?: DevRev.UserState | DevRev.UserState[];
}
