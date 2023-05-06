/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const ErrorBadRequestInvalidField: core.serialization.ObjectSchema<
    serializers.ErrorBadRequestInvalidField.Raw,
    DevRev.ErrorBadRequestInvalidField
> = core.serialization.object({
    fieldName: core.serialization.property("field_name", core.serialization.string()),
});

export declare namespace ErrorBadRequestInvalidField {
    interface Raw {
        field_name: string;
    }
}