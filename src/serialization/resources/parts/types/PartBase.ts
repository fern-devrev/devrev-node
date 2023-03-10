/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const PartBase: core.serialization.ObjectSchema<serializers.PartBase.Raw, DevRev.PartBase> = core.serialization
    .object({
        artifacts: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).ArtifactSummary))
            .optional(),
        description: core.serialization.string().optional(),
        name: core.serialization.string().optional(),
        ownedBy: core.serialization.property(
            "owned_by",
            core.serialization.list(core.serialization.lazy(async () => (await import("../../..")).UserSummary))
        ),
        stage: core.serialization.lazyObject(async () => (await import("../../..")).Stage).optional(),
        tags: core.serialization
            .list(core.serialization.lazyObject(async () => (await import("../../..")).TagWithValue))
            .optional(),
    })
    .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBase));

export declare namespace PartBase {
    interface Raw extends serializers.AtomBase.Raw {
        artifacts?: serializers.ArtifactSummary.Raw[] | null;
        description?: string | null;
        name?: string | null;
        owned_by: serializers.UserSummary.Raw[];
        stage?: serializers.Stage.Raw | null;
        tags?: serializers.TagWithValue.Raw[] | null;
    }
}
