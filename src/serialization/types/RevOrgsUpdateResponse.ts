/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const RevOrgsUpdateResponse: core.serialization.ObjectSchema<
    serializers.RevOrgsUpdateResponse.Raw,
    DevRev.RevOrgsUpdateResponse
> = core.serialization.object({
    revOrg: core.serialization.property(
        "rev_org",
        core.serialization.lazyObject(async () => (await import("..")).RevOrg)
    ),
});

export declare namespace RevOrgsUpdateResponse {
    interface Raw {
        rev_org: serializers.RevOrg.Raw;
    }
}
