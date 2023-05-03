/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const Feature: core.serialization.ObjectSchema<serializers.Feature.Raw, DevRev.Feature> =
    core.serialization.lazyObject(async () => (await import("..")).PartBase);

export declare namespace Feature {
    type Raw = serializers.PartBase.Raw;
}
