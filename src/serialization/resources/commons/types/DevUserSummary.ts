/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const DevUserSummary: core.serialization.ObjectSchema<serializers.DevUserSummary.Raw, DevRev.DevUserSummary> =
    core.serialization
        .object({})
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).UserBaseSummary));

export declare namespace DevUserSummary {
    interface Raw extends serializers.UserBaseSummary.Raw {}
}
