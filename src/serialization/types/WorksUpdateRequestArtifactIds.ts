/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WorksUpdateRequestArtifactIds: core.serialization.ObjectSchema<
    serializers.WorksUpdateRequestArtifactIds.Raw,
    DevRev.WorksUpdateRequestArtifactIds
> = core.serialization.object({
    set: core.serialization.list(core.serialization.string()).optional(),
});

export declare namespace WorksUpdateRequestArtifactIds {
    interface Raw {
        set?: string[] | null;
    }
}
