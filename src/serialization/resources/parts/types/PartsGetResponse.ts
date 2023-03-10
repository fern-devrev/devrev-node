/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartsGetResponse: core.serialization.ObjectSchema<
    serializers.PartsGetResponse.Raw,
    DevRev.PartsGetResponse
> = core.serialization.object({
    part: core.serialization.lazy(async () => (await import("../../..")).Part),
});

export declare namespace PartsGetResponse {
    interface Raw {
        part: serializers.Part.Raw;
    }
}
