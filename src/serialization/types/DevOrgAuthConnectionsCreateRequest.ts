/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const DevOrgAuthConnectionsCreateRequest: core.serialization.Schema<
    serializers.DevOrgAuthConnectionsCreateRequest.Raw,
    DevRev.DevOrgAuthConnectionsCreateRequest
> = core.serialization
    .union("type", {
        google_apps: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsGoogleApps),
        oidc: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsOidc),
        samlp: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsSaml),
        waad: core.serialization.lazyObject(async () => (await import("..")).AuthConnectionOptionsAzureAd),
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

    interface GoogleApps extends serializers.AuthConnectionOptionsGoogleApps.Raw {
        type: "google_apps";
    }

    interface Oidc extends serializers.AuthConnectionOptionsOidc.Raw {
        type: "oidc";
    }

    interface Samlp extends serializers.AuthConnectionOptionsSaml.Raw {
        type: "samlp";
    }

    interface Waad extends serializers.AuthConnectionOptionsAzureAd.Raw {
        type: "waad";
    }
}