/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const ArtifactsPrepareRequest: core.serialization.ObjectSchema<
    serializers.ArtifactsPrepareRequest.Raw,
    DevRev.ArtifactsPrepareRequest
> = core.serialization.object({
    fileName: core.serialization.property("file_name", core.serialization.string()),
});

export declare namespace ArtifactsPrepareRequest {
    interface Raw {
        file_name: string;
    }
}
