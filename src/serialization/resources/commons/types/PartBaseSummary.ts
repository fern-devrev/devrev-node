/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartBaseSummary: core.serialization.ObjectSchema<serializers.PartBaseSummary.Raw, DevRev.PartBaseSummary> =
    core.serialization
        .object({
            name: core.serialization.string().optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBaseSummary));

export declare namespace PartBaseSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {
        name?: string | null;
    }
}
