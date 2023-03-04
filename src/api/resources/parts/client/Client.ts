/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { DevRev } from "@fern-api/devrev";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Parts {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

/**
 * DevRev part interactions.
 */
export class Parts {
    constructor(private readonly options: Parts.Options) {}

    /**
     * Creates new [part](https://devrev.ai/docs/product/parts).
     */
    public async create(request: DevRev.PartsCreateRequest): Promise<DevRev.PartsCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "parts.create"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.PartsCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.PartsCreateResponse.parseOrThrow(
                _response.body as serializers.PartsCreateResponse.Raw,
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
     * Deletes a [part](https://devrev.ai/docs/product/parts).
     */
    public async delete(request: DevRev.PartsDeleteRequest): Promise<DevRev.PartsDeleteResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "parts.delete"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.PartsDeleteRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.PartsDeleteResponse.parseOrThrow(
                _response.body as serializers.PartsDeleteResponse.Raw,
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
     * Gets a [part's](https://devrev.ai/docs/product/parts) information.
     *
     */
    public async get(request: DevRev.PartsGetRequest): Promise<DevRev.PartsGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "parts.get"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.PartsGetResponse.parseOrThrow(_response.body as serializers.PartsGetResponse.Raw, {
                allowUnknownKeys: true,
            });
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
     * Lists a collection of [parts](https://devrev.ai/docs/product/parts).
     *
     */
    public async list(request: DevRev.PartsListRequest = {}): Promise<DevRev.PartsListResponse> {
        const { cursor, limit, mode, name, type } = request;
        const _queryParams = new URLSearchParams();
        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (mode != null) {
            _queryParams.append("mode", mode);
        }

        if (name != null) {
            if (Array.isArray(name)) {
                for (const _item of name) {
                    _queryParams.append("name", _item);
                }
            } else {
                _queryParams.append("name", name);
            }
        }

        if (type != null) {
            if (Array.isArray(type)) {
                for (const _item of type) {
                    _queryParams.append("type", _item);
                }
            } else {
                _queryParams.append("type", type);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "parts.list"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.PartsListResponse.parseOrThrow(
                _response.body as serializers.PartsListResponse.Raw,
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
     * Updates a [part's](https://devrev.ai/docs/product/parts) information.
     *
     */
    public async update(request: DevRev.PartsUpdateRequest): Promise<DevRev.PartsUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "parts.update"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.PartsUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.PartsUpdateResponse.parseOrThrow(
                _response.body as serializers.PartsUpdateResponse.Raw,
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
