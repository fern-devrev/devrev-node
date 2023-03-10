/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const DevOrgAuthConnectionsListResponse: core.serialization.ObjectSchema<
    serializers.DevOrgAuthConnectionsListResponse.Raw,
    DevRev.DevOrgAuthConnectionsListResponse
> = core.serialization.object({
    authConnections: core.serialization.property(
        "auth_connections",
        core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).AuthConnection))
    ),
});

export declare namespace DevOrgAuthConnectionsListResponse {
    interface Raw {
        auth_connections: serializers.AuthConnection.Raw[];
    }
}
