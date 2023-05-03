/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const GroupSummary: core.serialization.ObjectSchema<serializers.GroupSummary.Raw, DevRev.GroupSummary> =
    core.serialization.lazyObject(async () => (await import("..")).AtomBaseSummary);

export declare namespace GroupSummary {
    type Raw = serializers.AtomBaseSummary.Raw;
}
