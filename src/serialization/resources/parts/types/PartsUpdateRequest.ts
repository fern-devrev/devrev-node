/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartsUpdateRequest: core.serialization.ObjectSchema<
    serializers.PartsUpdateRequest.Raw,
    DevRev.PartsUpdateRequest
> = core.serialization.object({
    description: core.serialization.string().optional(),
    id: core.serialization.string(),
    name: core.serialization.string().optional(),
    type: core.serialization.lazy(async () => (await import("../../..")).PartType),
});

export declare namespace PartsUpdateRequest {
    interface Raw {
        description?: string | null;
        id: string;
        name?: string | null;
        type: serializers.PartType.Raw;
    }
}
