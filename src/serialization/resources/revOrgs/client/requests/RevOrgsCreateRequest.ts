/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../..";
import * as DevRev from "../../../../../api";
import * as core from "../../../../../core";

export const RevOrgsCreateRequest: core.serialization.Schema<
    serializers.RevOrgsCreateRequest.Raw,
    DevRev.RevOrgsCreateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    displayName: core.serialization.property("display_name", core.serialization.string()),
    domain: core.serialization.string().optional(),
    environment: core.serialization.lazy(async () => (await import("../../../..")).OrgEnvironment).optional(),
    externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
    tier: core.serialization.string().optional(),
});

export declare namespace RevOrgsCreateRequest {
    interface Raw {
        description?: string | null;
        display_name: string;
        domain?: string | null;
        environment?: serializers.OrgEnvironment.Raw | null;
        external_ref?: string | null;
        tier?: string | null;
    }
}