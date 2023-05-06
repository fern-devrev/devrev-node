/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const EnhancementSummary: core.serialization.ObjectSchema<
    serializers.EnhancementSummary.Raw,
    DevRev.EnhancementSummary
> = core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary);

export declare namespace EnhancementSummary {
    type Raw = serializers.PartBaseSummary.Raw;
}