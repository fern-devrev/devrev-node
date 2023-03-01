/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TagsDeleteResponse: core.serialization.Schema<
    serializers.TagsDeleteResponse.Raw,
    DevRev.TagsDeleteResponse
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace TagsDeleteResponse {
    type Raw = Record<string, unknown>;
}