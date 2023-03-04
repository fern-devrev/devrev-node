/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";

const _Base = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    enabled: core.serialization.boolean().optional(),
    id: core.serialization.string(),
});
export const AuthConnection: core.serialization.Schema<serializers.AuthConnection.Raw, DevRev.AuthConnection> =
    core.serialization
        .union("type", {
            google_apps: core.serialization
                .lazyObject(async () => (await import("../../..")).AuthConnectionOptionsGoogleApps)
                .extend(_Base),
            oidc: core.serialization
                .lazyObject(async () => (await import("../../..")).AuthConnectionOptionsOidc)
                .extend(_Base),
            samlp: core.serialization
                .lazyObject(async () => (await import("../../..")).AuthConnectionOptionsSaml)
                .extend(_Base),
            social: core.serialization
                .object({
                    value: core.serialization.lazy(async () => (await import("../../..")).AuthConnectionOptionsSocial),
                })
                .extend(_Base),
            waad: core.serialization
                .lazyObject(async () => (await import("../../..")).AuthConnectionOptionsAzureAd)
                .extend(_Base),
        })
        .transform<DevRev.AuthConnection>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace AuthConnection {
    type Raw =
        | AuthConnection.GoogleApps
        | AuthConnection.Oidc
        | AuthConnection.Samlp
        | AuthConnection.Social
        | AuthConnection.Waad;

    interface GoogleApps extends _Base, serializers.AuthConnectionOptionsGoogleApps.Raw {
        type: "google_apps";
    }

    interface Oidc extends _Base, serializers.AuthConnectionOptionsOidc.Raw {
        type: "oidc";
    }

    interface Samlp extends _Base, serializers.AuthConnectionOptionsSaml.Raw {
        type: "samlp";
    }

    interface Social extends _Base {
        type: "social";
        value: serializers.AuthConnectionOptionsSocial.Raw;
    }

    interface Waad extends _Base, serializers.AuthConnectionOptionsAzureAd.Raw {
        type: "waad";
    }

    interface _Base {
        display_name?: string;
        enabled?: boolean;
        id: string;
    }
}