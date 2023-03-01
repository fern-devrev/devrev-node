/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TagsDeleteRequest: core.serialization.ObjectSchema<
    serializers.TagsDeleteRequest.Raw,
    DevRev.TagsDeleteRequest
> = core.serialization.object({
    id: core.serialization.string(),
});

export declare namespace TagsDeleteRequest {
    interface Raw {
        id: string;
    }
}
