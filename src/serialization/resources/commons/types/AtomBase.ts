/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const AtomBase: core.serialization.ObjectSchema<serializers.AtomBase.Raw, DevRev.AtomBase> =
    core.serialization.object({
        createdBy: core.serialization.property(
            "created_by",
            core.serialization.lazyObject(async () => (await import("../../..")).UserSummary).optional()
        ),
        createdDate: core.serialization.property("created_date", core.serialization.string().optional()),
        displayId: core.serialization.property("display_id", core.serialization.string().optional()),
        id: core.serialization.string(),
        modifiedBy: core.serialization.property(
            "modified_by",
            core.serialization.lazyObject(async () => (await import("../../..")).UserSummary).optional()
        ),
        modifiedDate: core.serialization.property("modified_date", core.serialization.string().optional()),
    });

export declare namespace AtomBase {
    interface Raw {
        created_by?: serializers.UserSummary.Raw | null;
        created_date?: string | null;
        display_id?: string | null;
        id: string;
        modified_by?: serializers.UserSummary.Raw | null;
        modified_date?: string | null;
    }
}