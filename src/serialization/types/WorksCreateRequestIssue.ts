/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WorksCreateRequestIssue: core.serialization.ObjectSchema<
    serializers.WorksCreateRequestIssue.Raw,
    DevRev.WorksCreateRequestIssue
> = core.serialization.object({
    priority: core.serialization.lazy(async () => (await import("..")).IssuePriority).optional(),
    sprint: core.serialization.string().optional(),
});

export declare namespace WorksCreateRequestIssue {
    interface Raw {
        priority?: serializers.IssuePriority.Raw | null;
        sprint?: string | null;
    }
}
