/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const WorkBase: core.serialization.ObjectSchema<serializers.WorkBase.Raw, DevRev.WorkBase> = core.serialization
    .object({
        appliesToPart: core.serialization.property(
            "applies_to_part",
            core.serialization.lazyObject(async () => (await import("../../..")).PartSummary).optional()
        ),
        artifacts: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ArtifactSummary))
            .optional(),
        body: core.serialization.string().optional(),
        ownedBy: core.serialization.property(
            "owned_by",
            core.serialization.list(core.serialization.lazyObject(async () => (await import("../../..")).UserSummary))
        ),
        reportedBy: core.serialization.property(
            "reported_by",
            core.serialization
                .list(core.serialization.lazyObject(async () => (await import("../../..")).UserSummary))
                .optional()
        ),
        stage: core.serialization.lazyObject(async () => (await import("../../..")).Stage).optional(),
        tags: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).TagWithValue))
            .optional(),
        targetCloseDate: core.serialization.property("target_close_date", core.serialization.string().optional()),
        title: core.serialization.string(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBase));

export declare namespace WorkBase {
    interface Raw extends serializers.AtomBase.Raw {
        applies_to_part?: serializers.PartSummary.Raw | null;
        artifacts?: serializers.ArtifactSummary.Raw[] | null;
        body?: string | null;
        owned_by: serializers.UserSummary.Raw[];
        reported_by?: serializers.UserSummary.Raw[] | null;
        stage?: serializers.Stage.Raw | null;
        tags?: serializers.TagWithValue.Raw[] | null;
        target_close_date?: string | null;
        title: string;
    }
}
