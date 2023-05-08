/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import * as serializers from "..";
import * as DevRev from "../../api";

const _Base = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
    id: core.serialization.string(),
});
export const DevOrgAuthConnectionsUpdateRequest: core.serialization.Schema<
    serializers.DevOrgAuthConnectionsUpdateRequest.Raw,
    DevRev.DevOrgAuthConnectionsUpdateRequest
> = core.serialization
    .union("type", {
        google_apps: core.serialization
            .lazyObject(async () => (await import("..")).AuthConnectionOptionsGoogleApps)
            .extend(_Base),
        none: core.serialization
            .object({
                value: core.serialization.lazy(async () => (await import("..")).Empty),
            })
            .extend(_Base),
        oidc: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsOidc).extend(_Base),
        samlp: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsSaml).extend(_Base),
        waad: core.serialization
            .lazyObject(async () => (await import("..")).AuthConnectionOptionsAzureAd)
            .extend(_Base),
    })
    .transform<DevRev.DevOrgAuthConnectionsUpdateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace DevOrgAuthConnectionsUpdateRequest {
    type Raw =
        | DevOrgAuthConnectionsUpdateRequest.GoogleApps
        | DevOrgAuthConnectionsUpdateRequest.None
        | DevOrgAuthConnectionsUpdateRequest.Oidc
        | DevOrgAuthConnectionsUpdateRequest.Samlp
        | DevOrgAuthConnectionsUpdateRequest.Waad;

    interface GoogleApps extends _Base, serializers.AuthConnectionOptionsGoogleApps.Raw {
        type: "google_apps";
    }

    interface None extends _Base {
        type: "none";
        value: serializers.Empty.Raw;
    }

    interface Oidc extends _Base, serializers.AuthConnectionOptionsOidc.Raw {
        type: "oidc";
    }

    interface Samlp extends _Base, serializers.AuthConnectionOptionsSaml.Raw {
        type: "samlp";
    }

    interface Waad extends _Base, serializers.AuthConnectionOptionsAzureAd.Raw {
        type: "waad";
    }

    interface _Base {
        display_name?: string | null;
        id: string;
    }
}
