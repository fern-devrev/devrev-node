/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Specifies the process of obtaining a token.
 */
export type AuthTokenGrantType =
    | "urn:devrev:params:oauth:grant-type:token-issue"
    | "urn:ietf:params:oauth:grant-type:token-exchange";

export const AuthTokenGrantType = {
    TokenIssue: "urn:devrev:params:oauth:grant-type:token-issue",
    TokenExchange: "urn:ietf:params:oauth:grant-type:token-exchange",
} as const;
