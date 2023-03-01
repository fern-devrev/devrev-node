/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const ArtifactSummary: core.serialization.ObjectSchema<serializers.ArtifactSummary.Raw, DevRev.ArtifactSummary> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBaseSummary));

export declare namespace ArtifactSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {}
}
