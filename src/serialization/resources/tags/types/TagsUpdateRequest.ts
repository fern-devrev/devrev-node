/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TagsUpdateRequest: core.serialization.ObjectSchema<
    serializers.TagsUpdateRequest.Raw,
    DevRev.TagsUpdateRequest
> = core.serialization.object({
    allowedValues: core.serialization.property(
        "allowed_values",
        core.serialization.lazyObject(async () => (await import("../../..")).TagsUpdateAllowedValues).optional()
    ),
    description: core.serialization.string().optional(),
    id: core.serialization.string(),
    name: core.serialization.string().optional(),
});

export declare namespace TagsUpdateRequest {
    interface Raw {
        allowed_values?: serializers.TagsUpdateAllowedValues.Raw | null;
        description?: string | null;
        id: string;
        name?: string | null;
    }
}
