/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import { DevRev } from "@fern-api/devrev";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace AuthTokens {
    interface Options {
        environment: string;
        authorization?: core.Supplier<string>;
    }
}

export class AuthTokens {
    constructor(private readonly options: AuthTokens.Options) {}

    /**
     * Creates a JWT corresponding to the requested token type for the
     * authenticated user.
     *
     */
    public async create(request: DevRev.AuthTokensCreateRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.create"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            body: await serializers.AuthTokensCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Revokes the token that matches the given token ID issued under the
     * given Dev organization.
     *
     */
    public async delete(request: DevRev.AuthTokensDeleteRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.delete"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            body: await serializers.AuthTokensDeleteRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets the token metadata corresponding to the given token ID under the
     * given Dev organization.
     *
     */
    public async get(request: DevRev.AuthTokensGetRequest): Promise<DevRev.AuthTokensGetResponse> {
        const { tokenId } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("token_id", tokenId);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.get"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.AuthTokensGetResponse.parseOrThrow(
                _response.body as serializers.AuthTokensGetResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Gets the token metadata for all the tokens corresponding to the given
     * token type issued for a given subject.
     *
     */
    public async list(request: DevRev.AuthTokensListRequest = {}): Promise<DevRev.AuthTokensListResponse> {
        const { clientId, requestedTokenType, subject } = request;
        const _queryParams = new URLSearchParams();
        if (clientId != null) {
            _queryParams.append("client_id", clientId);
        }

        if (requestedTokenType != null) {
            _queryParams.append("requested_token_type", requestedTokenType);
        }

        if (subject != null) {
            _queryParams.append("subject", subject);
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.list"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.AuthTokensListResponse.parseOrThrow(
                _response.body as serializers.AuthTokensListResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Revokes all the tokens that matches the given token type created by the
     * authenticated user.
     *
     */
    public async selfDelete(request: DevRev.AuthTokensSelfDeleteRequest): Promise<void> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.self.delete"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            body: await serializers.AuthTokensSelfDeleteRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Updates token metadata of a token issued under a given Dev
     * organization.
     *
     */
    public async update(request: DevRev.AuthTokensUpdateRequest): Promise<DevRev.AuthTokensUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment, "auth-tokens.update"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.authorization),
            },
            body: await serializers.AuthTokensUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.AuthTokensUpdateResponse.parseOrThrow(
                _response.body as serializers.AuthTokensUpdateResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            throw new errors.DevRevError({
                statusCode: _response.error.statusCode,
                body: _response.error.body,
            });
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.DevRevError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.DevRevTimeoutError();
            case "unknown":
                throw new errors.DevRevError({
                    message: _response.error.errorMessage,
                });
        }
    }
}
