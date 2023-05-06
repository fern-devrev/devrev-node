/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const PartsListResponse: core.serialization.ObjectSchema<
    serializers.PartsListResponse.Raw,
    DevRev.PartsListResponse
> = core.serialization.object({
    nextCursor: core.serialization.property("next_cursor", core.serialization.string().optional()),
    parts: core.serialization.list(core.serialization.lazy(async () => (await import("..")).Part)),
    prevCursor: core.serialization.property("prev_cursor", core.serialization.string().optional()),
});

export declare namespace PartsListResponse {
    interface Raw {
        next_cursor?: string | null;
        parts: serializers.Part.Raw[];
        prev_cursor?: string | null;
    }
}