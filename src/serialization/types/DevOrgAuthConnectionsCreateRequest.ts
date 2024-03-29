/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../core";
import * as serializers from "..";
import * as DevRev from "../../api";

const _Base = core.serialization.object({
    displayName: core.serialization.property("display_name", core.serialization.string().optional()),
});
export const DevOrgAuthConnectionsCreateRequest: core.serialization.Schema<
    serializers.DevOrgAuthConnectionsCreateRequest.Raw,
    DevRev.DevOrgAuthConnectionsCreateRequest
> = core.serialization
    .union("type", {
        google_apps: core.serialization
            .lazyObject(async () => (await import("..")).AuthConnectionOptionsGoogleApps)
            .extend(_Base),
        oidc: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsOidc).extend(_Base),
        samlp: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsSaml).extend(_Base),
        waad: core.serialization
            .lazyObject(async () => (await import("..")).AuthConnectionOptionsAzureAd)
            .extend(_Base),
    })
    .transform<DevRev.DevOrgAuthConnectionsCreateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace DevOrgAuthConnectionsCreateRequest {
    type Raw =
        | DevOrgAuthConnectionsCreateRequest.GoogleApps
        | DevOrgAuthConnectionsCreateRequest.Oidc
        | DevOrgAuthConnectionsCreateRequest.Samlp
        | DevOrgAuthConnectionsCreateRequest.Waad;

    interface GoogleApps extends _Base, serializers.AuthConnectionOptionsGoogleApps.Raw {
        type: "google_apps";
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
    }
}
