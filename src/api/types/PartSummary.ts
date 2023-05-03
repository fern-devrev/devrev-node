/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export type PartSummary =
    | DevRev.PartSummary.Capability
    | DevRev.PartSummary.Enhancement
    | DevRev.PartSummary.Feature
    | DevRev.PartSummary.Product;

export declare namespace PartSummary {
    interface Capability extends DevRev.PartBaseSummary {
        type: "capability";
    }

    interface Enhancement extends DevRev.PartBaseSummary {
        type: "enhancement";
    }

    interface Feature extends DevRev.PartBaseSummary {
        type: "feature";
    }

    interface Product extends DevRev.PartBaseSummary {
        type: "product";
    }
}
