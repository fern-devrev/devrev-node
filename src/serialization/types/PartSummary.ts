/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const PartSummary: core.serialization.Schema<serializers.PartSummary.Raw, DevRev.PartSummary> =
    core.serialization
        .union("type", {
            capability: core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary),
            enhancement: core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary),
            feature: core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary),
            product: core.serialization.lazyObject(async () => (await import("..")).PartBaseSummary),
        })
        .transform<DevRev.PartSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace PartSummary {
    type Raw = PartSummary.Capability | PartSummary.Enhancement | PartSummary.Feature | PartSummary.Product;

    interface Capability extends serializers.PartBaseSummary.Raw {
        type: "capability";
    }

    interface Enhancement extends serializers.PartBaseSummary.Raw {
        type: "enhancement";
    }

    interface Feature extends serializers.PartBaseSummary.Raw {
        type: "feature";
    }

    interface Product extends serializers.PartBaseSummary.Raw {
        type: "product";
    }
}