/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * Connection object that specifies the configuration for an
 * authentication connection that is set up for a Dev organization.
 *
 */
export type AuthConnection =
    | DevRev.AuthConnection.GoogleApps
    | DevRev.AuthConnection.Oidc
    | DevRev.AuthConnection.Samlp
    | DevRev.AuthConnection.Social
    | DevRev.AuthConnection.Waad
    | DevRev.AuthConnection._Unknown;

export declare namespace AuthConnection {
    interface GoogleApps extends DevRev.AuthConnectionOptionsGoogleApps, _Base {
        type: "google_apps";
    }

    interface Oidc extends DevRev.AuthConnectionOptionsOidc, _Base {
        type: "oidc";
    }

    interface Samlp extends DevRev.AuthConnectionOptionsSaml, _Base {
        type: "samlp";
    }

    interface Social extends _Base {
        type: "social";
        value: DevRev.AuthConnectionOptionsSocial;
    }

    interface Waad extends DevRev.AuthConnectionOptionsAzureAd, _Base {
        type: "waad";
    }

    interface _Unknown extends _Base {
        type: void;
    }

    interface _Base {
        /**
         * Display name of the authentication connection. This name will be
         * visible to all the users when they sign in to this Dev
         * organization. For example, if the display_name is 'abclogin', then
         * it would appear on the login button as 'Log in to abclogin'.
         *
         */
        displayName?: string;
        /**
         * Whether the authentication connection is enabled or disabled. If
         * set to false, the authentication connection will not show up on the
         * login screen as a login option.
         *
         */
        enabled?: boolean;
        /** ID of the authentication connection. */
        id: string;
    }

    interface _Visitor<_Result> {
        googleApps: (value: DevRev.AuthConnectionOptionsGoogleApps) => _Result;
        oidc: (value: DevRev.AuthConnectionOptionsOidc) => _Result;
        samlp: (value: DevRev.AuthConnectionOptionsSaml) => _Result;
        social: (value: DevRev.AuthConnectionOptionsSocial) => _Result;
        waad: (value: DevRev.AuthConnectionOptionsAzureAd) => _Result;
        _other: (value: { type: string }) => _Result;
    }
}
