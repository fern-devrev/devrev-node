/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as DevRev from "../../..";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace Parts {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

export class Parts {
    constructor(protected readonly options: Parts.Options) {}

    /**
     * Creates new [part](https://devrev.ai/docs/product/parts).
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async create(request: DevRev.PartsCreateRequest): Promise<DevRev.PartsCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Default, "parts.create"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            body: await serializers.PartsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PartsCreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async delete(request: DevRev.PartsDeleteRequest): Promise<DevRev.PartsDeleteResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Default, "parts.delete"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            body: await serializers.PartsDeleteRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PartsDeleteResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async get(request: DevRev.PartsGetRequest): Promise<DevRev.PartsGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Default, "parts.get"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PartsGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async list(request: DevRev.PartsListRequest = {}): Promise<DevRev.PartsListResponse> {
        const { createdBy, cursor, limit, mode, name, ownedBy, type: type_ } = request;
        const _queryParams = new URLSearchParams();
        if (createdBy != null) {
            if (Array.isArray(createdBy)) {
                for (const _item of createdBy) {
                    _queryParams.append("created_by", _item);
                }
            } else {
                _queryParams.append("created_by", createdBy);
            }
        }

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

        if (ownedBy != null) {
            if (Array.isArray(ownedBy)) {
                for (const _item of ownedBy) {
                    _queryParams.append("owned_by", _item);
                }
            } else {
                _queryParams.append("owned_by", ownedBy);
            }
        }

        if (type_ != null) {
            if (Array.isArray(type_)) {
                for (const _item of type_) {
                    _queryParams.append("type", _item);
                }
            } else {
                _queryParams.append("type", type_);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Default, "parts.list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PartsListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async update(request: DevRev.PartsUpdateRequest): Promise<DevRev.PartsUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Default, "parts.update"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@fern-api/devrev",
                "X-Fern-SDK-Version": "1.0.0-beta",
            },
            contentType: "application/json",
            body: await serializers.PartsUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
            timeoutMs: 60000,
        });
        if (_response.ok) {
            return await serializers.PartsUpdateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.ErrorBadRequest.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.ErrorUnauthorized.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ErrorForbidden.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.ErrorNotFound.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.ErrorTooManyRequests.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorInternalServerError.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ErrorServiceUnavailable.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                default:
                    throw new errors.DevRevError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
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

    protected async _getAuthorizationHeader() {
        const value = await core.Supplier.get(this.options.apiKey);
        if (value != null) {
            return value;
        }

        return undefined;
    }
}
