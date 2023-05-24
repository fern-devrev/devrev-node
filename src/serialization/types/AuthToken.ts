/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const AuthToken: core.serialization.ObjectSchema<serializers.AuthToken.Raw, DevRev.AuthToken> =
    core.serialization
        .object({
            clientId: core.serialization.property("client_id", core.serialization.string().optional()),
            expiresAt: core.serialization.property("expires_at", core.serialization.string().optional()),
            issuedAt: core.serialization.property("issued_at", core.serialization.string().optional()),
            requestedTokenType: core.serialization.property(
                "requested_token_type",
                core.serialization.lazy(async () => (await import("..")).AuthTokenRequestedTokenType).optional()
            ),
            scopes: core.serialization.list(core.serialization.string()).optional(),
            status: core.serialization.lazy(async () => (await import("..")).AuthTokenStatus).optional(),
            subject: core.serialization.string().optional(),
            tokenHint: core.serialization.property("token_hint", core.serialization.string().optional()),
        })
        .extend(core.serialization.lazyObject(async () => (await import("..")).AtomBase));

export declare namespace AuthToken {
    interface Raw extends serializers.AtomBase.Raw {
        client_id?: string | null;
        expires_at?: string | null;
        issued_at?: string | null;
        requested_token_type?: serializers.AuthTokenRequestedTokenType.Raw | null;
        scopes?: string[] | null;
        status?: serializers.AuthTokenStatus.Raw | null;
        subject?: string | null;
        token_hint?: string | null;
    }
}
