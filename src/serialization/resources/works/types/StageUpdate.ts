/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const StageUpdate: core.serialization.ObjectSchema<serializers.StageUpdate.Raw, DevRev.StageUpdate> =
    core.serialization.object({
        name: core.serialization.string().optional(),
    });

export declare namespace StageUpdate {
    interface Raw {
        name?: string | null;
    }
}
