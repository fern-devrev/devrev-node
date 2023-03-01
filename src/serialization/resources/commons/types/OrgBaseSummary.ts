/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const OrgBaseSummary: core.serialization.ObjectSchema<serializers.OrgBaseSummary.Raw, DevRev.OrgBaseSummary> =
    core.serialization
        .object({
            displayName: core.serialization.property("display_name", core.serialization.string().optional()),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBaseSummary));

export declare namespace OrgBaseSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {
        display_name?: string | null;
    }
}
