/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const ErrorBadRequest: core.serialization.ObjectSchema<serializers.ErrorBadRequest.Raw, DevRev.ErrorBadRequest> =
    core.serialization
        .object({
            type: core.serialization.lazy(async () => (await import("..")).ErrorBadRequestType),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).ErrorBase));

export declare namespace ErrorBadRequest {
    interface Raw extends serializers.ErrorBase.Raw {
        type: serializers.ErrorBadRequestType.Raw;
    }
}
