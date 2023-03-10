/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const TimelineEntryBase: core.serialization.ObjectSchema<
    serializers.TimelineEntryBase.Raw,
    DevRev.TimelineEntryBase
> = core.serialization
    .object({})
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBase));

export declare namespace TimelineEntryBase {
    interface Raw extends serializers.AtomBase.Raw {}
}
