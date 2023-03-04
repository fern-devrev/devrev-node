/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";

const _Base = core.serialization.object({
    description: core.serialization.string().optional(),
    name: core.serialization.string().optional(),
    ownedBy: core.serialization.property("owned_by", core.serialization.list(core.serialization.string())),
    type: core.serialization.lazy(async () => (await import("../../..")).PartType),
});
export const PartsCreateRequest: core.serialization.Schema<
    serializers.PartsCreateRequest.Raw,
    DevRev.PartsCreateRequest
> = core.serialization
    .union("type", {
        capability: core.serialization
            .object({
                value: core.serialization.lazy(async () => (await import("../../..")).PartsCreateRequestCapability),
            })
            .extend(_Base),
        feature: core.serialization
            .object({
                value: core.serialization.lazy(async () => (await import("../../..")).PartsCreateRequestFeature),
            })
            .extend(_Base),
        product: core.serialization
            .object({
                value: core.serialization.lazy(async () => (await import("../../..")).PartsCreateRequestProduct),
            })
            .extend(_Base),
    })
    .transform<DevRev.PartsCreateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace PartsCreateRequest {
    type Raw = PartsCreateRequest.Capability | PartsCreateRequest.Feature | PartsCreateRequest.Product;

    interface Capability extends _Base {
        type: "capability";
        value?: serializers.PartsCreateRequestCapability.Raw;
    }

    interface Feature extends _Base {
        type: "feature";
        value?: serializers.PartsCreateRequestFeature.Raw;
    }

    interface Product extends _Base {
        type: "product";
        value?: serializers.PartsCreateRequestProduct.Raw;
    }

    interface _Base {
        description?: string | null;
        name?: string | null;
        owned_by: string[];
        type: serializers.PartType.Raw;
    }
}
