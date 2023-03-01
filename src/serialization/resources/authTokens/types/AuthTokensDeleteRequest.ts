/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const AuthTokensDeleteRequest: core.serialization.ObjectSchema<
    serializers.AuthTokensDeleteRequest.Raw,
    DevRev.AuthTokensDeleteRequest
> = core.serialization.object({
    tokenId: core.serialization.property("token_id", core.serialization.string().optional()),
});

export declare namespace AuthTokensDeleteRequest {
    interface Raw {
        token_id?: string | null;
    }
}
