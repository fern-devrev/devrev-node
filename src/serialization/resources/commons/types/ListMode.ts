/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const ListMode: core.serialization.Schema<serializers.ListMode.Raw, DevRev.ListMode> = core.serialization.enum_([
    "after",
    "before",
]);

export declare namespace ListMode {
    type Raw = "after" | "before";
}