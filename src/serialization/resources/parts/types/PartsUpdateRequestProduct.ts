/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartsUpdateRequestProduct: core.serialization.Schema<
    serializers.PartsUpdateRequestProduct.Raw,
    DevRev.PartsUpdateRequestProduct
> = core.serialization.record(core.serialization.string(), core.serialization.unknown());

export declare namespace PartsUpdateRequestProduct {
    type Raw = Record<string, unknown>;
}
