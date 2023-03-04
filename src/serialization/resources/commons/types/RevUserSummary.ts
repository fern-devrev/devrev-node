/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const RevUserSummary: core.serialization.ObjectSchema<serializers.RevUserSummary.Raw, DevRev.RevUserSummary> =
    core.serialization
        .object({
            revOrg: core.serialization.property(
                "rev_org",
                core.serialization.lazy(async () => (await import("../../..")).OrgSummary).optional()
            ),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).UserBaseSummary));

export declare namespace RevUserSummary {
    interface Raw extends serializers.UserBaseSummary.Raw {
        rev_org?: serializers.OrgSummary.Raw | null;
    }
}
