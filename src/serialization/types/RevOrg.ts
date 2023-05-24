/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const RevOrg: core.serialization.ObjectSchema<serializers.RevOrg.Raw, DevRev.RevOrg> = core.serialization
    .object({
        description: core.serialization.string().optional(),
        domain: core.serialization.string().optional(),
        externalRef: core.serialization.property("external_ref", core.serialization.string().optional()),
    })
    .extend(core.serialization.lazyObject(async () => (await import("..")).OrgBase));

export declare namespace RevOrg {
    interface Raw extends serializers.OrgBase.Raw {
        description?: string | null;
        domain?: string | null;
        external_ref?: string | null;
    }
}
