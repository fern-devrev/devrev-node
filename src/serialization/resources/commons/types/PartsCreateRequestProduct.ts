/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartsCreateRequestProduct: core.serialization.Schema<
    serializers.PartsCreateRequestProduct.Raw,
    DevRev.PartsCreateRequestProduct
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace PartsCreateRequestProduct {
    type Raw = Record<string, unknown>;
}