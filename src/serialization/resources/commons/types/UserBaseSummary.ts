/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const UserBaseSummary: core.serialization.ObjectSchema<serializers.UserBaseSummary.Raw, DevRev.UserBaseSummary> =
    core.serialization
        .object({
            displayName: core.serialization.property("display_name", core.serialization.string().optional()),
            email: core.serialization.string().optional(),
            fullName: core.serialization.property("full_name", core.serialization.string().optional()),
            profilePicture: core.serialization.property("profile_picture", core.serialization.string().optional()),
            state: core.serialization.lazy(async () => (await import("../../..")).UserState).optional(),
        })
        .extend(core.serialization.lazyObject(async () => (await import("../../..")).AtomBaseSummary));

export declare namespace UserBaseSummary {
    interface Raw extends serializers.AtomBaseSummary.Raw {
        display_name?: string | null;
        email?: string | null;
        full_name?: string | null;
        profile_picture?: string | null;
        state?: serializers.UserState.Raw | null;
    }
}
