/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const ArtifactsLocateResponse: core.serialization.ObjectSchema<
    serializers.ArtifactsLocateResponse.Raw,
    DevRev.ArtifactsLocateResponse
> = core.serialization.object({
    expiresAt: core.serialization.property("expires_at", core.serialization.string().optional()),
    url: core.serialization.string(),
});

export declare namespace ArtifactsLocateResponse {
    interface Raw {
        expires_at?: string | null;
        url: string;
    }
}
