/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const InlinedType13: core.serialization.ObjectSchema<serializers.InlinedType13.Raw, DevRev.InlinedType13> =
    core.serialization.object({
        priority: core.serialization.lazy(async () => (await import("../../..")).IssuePriority).optional(),
    });

export declare namespace InlinedType13 {
    interface Raw {
        priority?: serializers.IssuePriority.Raw | null;
    }
}