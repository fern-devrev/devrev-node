/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const PartsUpdateRequestEnhancement: core.serialization.ObjectSchema<
    serializers.PartsUpdateRequestEnhancement.Raw,
    DevRev.PartsUpdateRequestEnhancement
> = core.serialization.object({
    targetCloseDate: core.serialization.property("target_close_date", core.serialization.string().optional()),
});

export declare namespace PartsUpdateRequestEnhancement {
    interface Raw {
        target_close_date?: string | null;
    }
}
