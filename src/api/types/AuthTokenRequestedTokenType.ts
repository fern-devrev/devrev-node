/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * The type of the requested token.
 */
export type AuthTokenRequestedTokenType =
    | "urn:devrev:params:oauth:token-type:aat"
    | "urn:devrev:params:oauth:token-type:aat:public"
    | "urn:devrev:params:oauth:token-type:dev"
    | "urn:devrev:params:oauth:token-type:pat"
    | "urn:devrev:params:oauth:token-type:rev"
    | "urn:devrev:params:oauth:token-type:session"
    | "urn:devrev:params:oauth:token-type:session:dev0"
    | "urn:devrev:params:oauth:token-type:sys"
    | "urn:ietf:params:oauth:token-type:jwt";

export const AuthTokenRequestedTokenType = {
    UrnDevrevParamsOauthTokenTypeAat: "urn:devrev:params:oauth:token-type:aat",
    UrnDevrevParamsOauthTokenTypeAatPublic: "urn:devrev:params:oauth:token-type:aat:public",
    UrnDevrevParamsOauthTokenTypeDev: "urn:devrev:params:oauth:token-type:dev",
    UrnDevrevParamsOauthTokenTypePat: "urn:devrev:params:oauth:token-type:pat",
    UrnDevrevParamsOauthTokenTypeRev: "urn:devrev:params:oauth:token-type:rev",
    UrnDevrevParamsOauthTokenTypeSession: "urn:devrev:params:oauth:token-type:session",
    UrnDevrevParamsOauthTokenTypeSessionDev0: "urn:devrev:params:oauth:token-type:session:dev0",
    UrnDevrevParamsOauthTokenTypeSys: "urn:devrev:params:oauth:token-type:sys",
    UrnIetfParamsOauthTokenTypeJwt: "urn:ietf:params:oauth:token-type:jwt",
} as const;
