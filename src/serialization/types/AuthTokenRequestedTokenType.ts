/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const AuthTokenRequestedTokenType: core.serialization.Schema<
    serializers.AuthTokenRequestedTokenType.Raw,
    DevRev.AuthTokenRequestedTokenType
> = core.serialization.enum_([
    "urn:devrev:params:oauth:token-type:aat",
    "urn:devrev:params:oauth:token-type:aat:public",
    "urn:devrev:params:oauth:token-type:dev",
    "urn:devrev:params:oauth:token-type:pat",
    "urn:devrev:params:oauth:token-type:rev",
    "urn:devrev:params:oauth:token-type:session",
    "urn:devrev:params:oauth:token-type:session:dev0",
    "urn:devrev:params:oauth:token-type:sys",
    "urn:ietf:params:oauth:token-type:jwt",
]);

export declare namespace AuthTokenRequestedTokenType {
    type Raw =
        | "urn:devrev:params:oauth:token-type:aat"
        | "urn:devrev:params:oauth:token-type:aat:public"
        | "urn:devrev:params:oauth:token-type:dev"
        | "urn:devrev:params:oauth:token-type:pat"
        | "urn:devrev:params:oauth:token-type:rev"
        | "urn:devrev:params:oauth:token-type:session"
        | "urn:devrev:params:oauth:token-type:session:dev0"
        | "urn:devrev:params:oauth:token-type:sys"
        | "urn:ietf:params:oauth:token-type:jwt";
}
