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
    TokenTypeAat: "urn:devrev:params:oauth:token-type:aat",
    TokenTypePublic: "urn:devrev:params:oauth:token-type:aat:public",
    TokenTypeDev: "urn:devrev:params:oauth:token-type:dev",
    TokenTypePat: "urn:devrev:params:oauth:token-type:pat",
    TokenTypeRev: "urn:devrev:params:oauth:token-type:rev",
    TokenTypeSession: "urn:devrev:params:oauth:token-type:session",
    TokenTypeDev0: "urn:devrev:params:oauth:token-type:session:dev0",
    TokenTypeSys: "urn:devrev:params:oauth:token-type:sys",
    TokenTypeJwt: "urn:ietf:params:oauth:token-type:jwt",
} as const;
