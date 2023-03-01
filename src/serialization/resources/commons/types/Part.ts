/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const Part: core.serialization.ObjectSchema<serializers.Part.Raw, DevRev.Part> = core.serialization.object({
    type: core.serialization.lazy(async () => (await import("../../..")).PartType),
});

export declare namespace Part {
    interface Raw {
        type: serializers.PartType.Raw;
    }
}
