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

export declare namespace Works {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

/**
 * DevRev work interactions.
 */
export class Works {
    constructor(protected readonly options: Works.Options) {}

    /**
     * Creates new work ([issue](https://devrev.ai/docs/product/build),
     * [ticket](https://devrev.ai/docs/product/support)) item.
     *
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async create(request: DevRev.WorksCreateRequest): Promise<DevRev.WorksCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.create"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.WorksCreateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.WorksCreateResponse.parseOrThrow(_response.body, {
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
     * Deletes a work item.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async delete(request: DevRev.WorksDeleteRequest): Promise<DevRev.WorksDeleteResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.delete"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.WorksDeleteRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.WorksDeleteResponse.parseOrThrow(_response.body, {
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
     * Exports a collection of work items.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async export(request: DevRev.WorksExportRequest = {}): Promise<DevRev.WorksExportResponse> {
        const {
            appliesToPart,
            createdBy,
            first,
            issuePriority,
            ownedBy,
            stageName,
            targetCloseDateAfter,
            targetCloseDateBefore,
            ticketRevOrg,
            ticketSeverity,
            type,
        } = request;
        const _queryParams = new URLSearchParams();
        if (appliesToPart != null) {
            if (Array.isArray(appliesToPart)) {
                for (const _item of appliesToPart) {
                    _queryParams.append("applies_to_part", _item);
                }
            } else {
                _queryParams.append("applies_to_part", appliesToPart);
            }
        }

        if (createdBy != null) {
            if (Array.isArray(createdBy)) {
                for (const _item of createdBy) {
                    _queryParams.append("created_by", _item);
                }
            } else {
                _queryParams.append("created_by", createdBy);
            }
        }

        if (first != null) {
            _queryParams.append("first", first.toString());
        }

        if (issuePriority != null) {
            if (Array.isArray(issuePriority)) {
                for (const _item of issuePriority) {
                    _queryParams.append("issue.priority", _item);
                }
            } else {
                _queryParams.append("issue.priority", issuePriority);
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

        if (stageName != null) {
            if (Array.isArray(stageName)) {
                for (const _item of stageName) {
                    _queryParams.append("stage.name", _item);
                }
            } else {
                _queryParams.append("stage.name", stageName);
            }
        }

        if (targetCloseDateAfter != null) {
            _queryParams.append("target_close_date.after", targetCloseDateAfter.toISOString());
        }

        if (targetCloseDateBefore != null) {
            _queryParams.append("target_close_date.before", targetCloseDateBefore.toISOString());
        }

        if (ticketRevOrg != null) {
            if (Array.isArray(ticketRevOrg)) {
                for (const _item of ticketRevOrg) {
                    _queryParams.append("ticket.rev_org", _item);
                }
            } else {
                _queryParams.append("ticket.rev_org", ticketRevOrg);
            }
        }

        if (ticketSeverity != null) {
            if (Array.isArray(ticketSeverity)) {
                for (const _item of ticketSeverity) {
                    _queryParams.append("ticket.severity", _item);
                }
            } else {
                _queryParams.append("ticket.severity", ticketSeverity);
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
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.export"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.WorksExportResponse.parseOrThrow(_response.body, {
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
     * Gets a work item's information.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async get(request: DevRev.WorksGetRequest): Promise<DevRev.WorksGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.get"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.WorksGetResponse.parseOrThrow(_response.body, {
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
     * Lists a collection of work items.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async list(request: DevRev.WorksListRequest = {}): Promise<DevRev.WorksListResponse> {
        const {
            appliesToPart,
            createdBy,
            cursor,
            issuePriority,
            limit,
            mode,
            ownedBy,
            stageName,
            targetCloseDateAfter,
            targetCloseDateBefore,
            ticketRevOrg,
            ticketSeverity,
            type,
        } = request;
        const _queryParams = new URLSearchParams();
        if (appliesToPart != null) {
            if (Array.isArray(appliesToPart)) {
                for (const _item of appliesToPart) {
                    _queryParams.append("applies_to_part", _item);
                }
            } else {
                _queryParams.append("applies_to_part", appliesToPart);
            }
        }

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

        if (issuePriority != null) {
            if (Array.isArray(issuePriority)) {
                for (const _item of issuePriority) {
                    _queryParams.append("issue.priority", _item);
                }
            } else {
                _queryParams.append("issue.priority", issuePriority);
            }
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (mode != null) {
            _queryParams.append("mode", mode);
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

        if (stageName != null) {
            if (Array.isArray(stageName)) {
                for (const _item of stageName) {
                    _queryParams.append("stage.name", _item);
                }
            } else {
                _queryParams.append("stage.name", stageName);
            }
        }

        if (targetCloseDateAfter != null) {
            _queryParams.append("target_close_date.after", targetCloseDateAfter.toISOString());
        }

        if (targetCloseDateBefore != null) {
            _queryParams.append("target_close_date.before", targetCloseDateBefore.toISOString());
        }

        if (ticketRevOrg != null) {
            if (Array.isArray(ticketRevOrg)) {
                for (const _item of ticketRevOrg) {
                    _queryParams.append("ticket.rev_org", _item);
                }
            } else {
                _queryParams.append("ticket.rev_org", ticketRevOrg);
            }
        }

        if (ticketSeverity != null) {
            if (Array.isArray(ticketSeverity)) {
                for (const _item of ticketSeverity) {
                    _queryParams.append("ticket.severity", _item);
                }
            } else {
                _queryParams.append("ticket.severity", ticketSeverity);
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
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.list"),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.WorksListResponse.parseOrThrow(_response.body, {
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
     * Updates a work item's information.
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async update(request: DevRev.WorksUpdateRequest): Promise<DevRev.WorksUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "works.update"),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
            },
            contentType: "application/json",
            body: await serializers.WorksUpdateRequest.jsonOrThrow(request, { unrecognizedObjectKeys: "strip" }),
        });
        if (_response.ok) {
            return await serializers.WorksUpdateResponse.parseOrThrow(_response.body, {
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
