/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export type OrgSummary = DevRev.OrgSummary.RevOrg;

export declare namespace OrgSummary {
    interface RevOrg extends DevRev.OrgBaseSummary, _Base {
        type: "rev_org";
    }

    interface _Base {
        type: DevRev.OrgType;
    }
}
