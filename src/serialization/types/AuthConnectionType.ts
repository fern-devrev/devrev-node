/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const AuthConnectionType: core.serialization.Schema<
    serializers.AuthConnectionType.Raw,
    DevRev.AuthConnectionType
> = core.serialization.enum_(["google_apps", "oidc", "samlp", "social", "waad"]);

export declare namespace AuthConnectionType {
    type Raw = "google_apps" | "oidc" | "samlp" | "social" | "waad";
}