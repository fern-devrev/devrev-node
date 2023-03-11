/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const MissingRequiredFieldBody: core.serialization.ObjectSchema<
    serializers.MissingRequiredFieldBody.Raw,
    DevRev.MissingRequiredFieldBody
> = core.serialization.object({
    fieldName: core.serialization.property("field_name", core.serialization.string()),
});

export declare namespace MissingRequiredFieldBody {
    interface Raw {
        field_name: string;
    }
}
