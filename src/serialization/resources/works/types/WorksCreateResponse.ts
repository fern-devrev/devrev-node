/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const WorksCreateResponse: core.serialization.ObjectSchema<
    serializers.WorksCreateResponse.Raw,
    DevRev.WorksCreateResponse
> = core.serialization.object({
    work: core.serialization.lazyObject(async () => (await import("../../..")).Work),
});

export declare namespace WorksCreateResponse {
    interface Raw {
        work: serializers.Work.Raw;
    }
}