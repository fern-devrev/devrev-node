/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TagsGetResponse: core.serialization.ObjectSchema<serializers.TagsGetResponse.Raw, DevRev.TagsGetResponse> =
    core.serialization.object({
        tag: core.serialization.lazyObject(async () => (await import("../../..")).Tag),
    });

export declare namespace TagsGetResponse {
    interface Raw {
        tag: serializers.Tag.Raw;
    }
}
