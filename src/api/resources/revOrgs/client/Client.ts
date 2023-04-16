/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { DevRev } from "@fern-api/devrev";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";
import URLSearchParams from "@ungap/url-search-params";

export declare namespace RevOrgs {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

/**
 * Rev organization interactions.
 */
export class RevOrgs {
    constructor(protected readonly options: RevOrgs.Options) {}

    /**
     * Creates a Rev organization in the authenticated user's Dev
     * organization.
     *
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async create(request: DevRev.RevOrgsCreateRequest): Promise<DevRev.RevOrgsCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "rev-orgs.create"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RevOrgsCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RevOrgsCreateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.InternalServerErrorErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ServiceUnavailableErrorBody.parseOrThrow(_response.error.body, {
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
     * Deletes the Rev organization.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async delete(request: DevRev.RevOrgsDeleteRequest): Promise<DevRev.RevOrgsDeleteResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "rev-orgs.delete"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RevOrgsDeleteRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RevOrgsDeleteResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.InternalServerErrorErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ServiceUnavailableErrorBody.parseOrThrow(_response.error.body, {
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
     * Retrieves the Rev organization's information.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async get(request: DevRev.RevOrgsGetRequest): Promise<DevRev.RevOrgsGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "rev-orgs.get"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RevOrgsGetResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.InternalServerErrorErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ServiceUnavailableErrorBody.parseOrThrow(_response.error.body, {
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
     * Gets the list of Rev organizations' information belonging to the
     * authenticated user's Dev Organization which the user is also authorized
     * to access.
     *
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async list(request: DevRev.RevOrgsListRequest = {}): Promise<DevRev.RevOrgsListResponse> {
        const {
            createdBy,
            createdDateAfter,
            createdDateBefore,
            cursor,
            limit,
            mode,
            modifiedDateAfter,
            modifiedDateBefore,
            sortBy,
        } = request;
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

        if (createdDateAfter != null) {
            _queryParams.append("created_date.after", createdDateAfter.toISOString());
        }

        if (createdDateBefore != null) {
            _queryParams.append("created_date.before", createdDateBefore.toISOString());
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

        if (modifiedDateAfter != null) {
            _queryParams.append("modified_date.after", modifiedDateAfter.toISOString());
        }

        if (modifiedDateBefore != null) {
            _queryParams.append("modified_date.before", modifiedDateBefore.toISOString());
        }

        if (sortBy != null) {
            if (Array.isArray(sortBy)) {
                for (const _item of sortBy) {
                    _queryParams.append("sort_by", _item);
                }
            } else {
                _queryParams.append("sort_by", sortBy);
            }
        }

        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "rev-orgs.list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.RevOrgsListResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.InternalServerErrorErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ServiceUnavailableErrorBody.parseOrThrow(_response.error.body, {
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
     * Updates the Rev organization's information.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async update(request: DevRev.RevOrgsUpdateRequest): Promise<DevRev.RevOrgsUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "rev-orgs.update"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.RevOrgsUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.RevOrgsUpdateResponse.parseOrThrow(_response.body, {
                unrecognizedObjectKeys: "passthrough",
                allowUnrecognizedUnionMembers: true,
                allowUnrecognizedEnumValues: true,
            });
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequestError(
                        await serializers.BadRequestErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 401:
                    throw new DevRev.UnauthorizedError(
                        await serializers.UnauthorizedErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 403:
                    throw new DevRev.ForbiddenError(
                        await serializers.ForbiddenErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFoundError(
                        await serializers.NotFoundErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequestsError(
                        await serializers.TooManyRequestsErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.InternalServerErrorErrorBody.parseOrThrow(_response.error.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailableError(
                        await serializers.ServiceUnavailableErrorBody.parseOrThrow(_response.error.body, {
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
