/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const RevOrgsGetResponse: core.serialization.ObjectSchema<
    serializers.RevOrgsGetResponse.Raw,
    DevRev.RevOrgsGetResponse
> = core.serialization.object({
    revOrg: core.serialization.property(
        "rev_org",
        core.serialization.lazyObject(async () => (await import("..")).RevOrg)
    ),
});

export declare namespace RevOrgsGetResponse {
    interface Raw {
        rev_org: serializers.RevOrg.Raw;
    }
}
