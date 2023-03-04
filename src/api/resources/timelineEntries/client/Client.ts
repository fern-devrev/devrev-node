/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { DevRev } from "@fern-api/devrev";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace TimelineEntries {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

/**
 * APIs to manage timeline entries for objects.
 */
export class TimelineEntries {
    constructor(private readonly options: TimelineEntries.Options) {}

    /**
     * Creates a new entry on an object's timeline.
     * @throws {DevRev.BadRequest}
     * @throws {DevRev.Unauthorized}
     * @throws {DevRev.Forbidden}
     * @throws {DevRev.NotFound}
     * @throws {DevRev.TooManyRequests}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailable}
     */
    public async create(request: DevRev.TimelineEntriesCreateRequest): Promise<DevRev.TimelineEntriesCreateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.DevRevEnvironment.Production,
                "timeline-entries.create"
            ),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.TimelineEntriesCreateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.TimelineEntriesCreateResponse.parseOrThrow(
                _response.body as serializers.TimelineEntriesCreateResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequest(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 401:
                    throw new DevRev.Unauthorized(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 403:
                    throw new DevRev.Forbidden(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFound(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequests(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailable(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
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
     * Gets an entry on an object's timeline.
     * @throws {DevRev.BadRequest}
     * @throws {DevRev.Unauthorized}
     * @throws {DevRev.Forbidden}
     * @throws {DevRev.NotFound}
     * @throws {DevRev.TooManyRequests}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailable}
     */
    public async get(request: DevRev.GetTimelineRequest): Promise<DevRev.TimelineEntriesGetResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "timeline-entries.get"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.TimelineEntriesGetResponse.parseOrThrow(
                _response.body as serializers.TimelineEntriesGetResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequest(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 401:
                    throw new DevRev.Unauthorized(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 403:
                    throw new DevRev.Forbidden(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFound(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequests(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailable(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
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
     * Lists the timeline entries for an object.
     * @throws {DevRev.BadRequest}
     * @throws {DevRev.Unauthorized}
     * @throws {DevRev.Forbidden}
     * @throws {DevRev.NotFound}
     * @throws {DevRev.TooManyRequests}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailable}
     */
    public async list(request: DevRev.TimelineEntriesListRequest): Promise<DevRev.TimelineEntriesListResponse> {
        const { object, cursor, limit, mode } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("object", object);
        if (cursor != null) {
            _queryParams.append("cursor", cursor);
        }

        if (limit != null) {
            _queryParams.append("limit", limit.toString());
        }

        if (mode != null) {
            _queryParams.append("mode", mode);
        }

        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.DevRevEnvironment.Production,
                "timeline-entries.list"
            ),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.TimelineEntriesListResponse.parseOrThrow(
                _response.body as serializers.TimelineEntriesListResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequest(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 401:
                    throw new DevRev.Unauthorized(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 403:
                    throw new DevRev.Forbidden(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFound(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequests(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailable(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
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
     * Updates an entry on an object's timeline.
     * @throws {DevRev.BadRequest}
     * @throws {DevRev.Unauthorized}
     * @throws {DevRev.Forbidden}
     * @throws {DevRev.NotFound}
     * @throws {DevRev.TooManyRequests}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailable}
     */
    public async update(request: DevRev.TimelineEntriesUpdateRequest): Promise<DevRev.TimelineEntriesUpdateResponse> {
        const _response = await core.fetcher({
            url: urlJoin(
                this.options.environment ?? environments.DevRevEnvironment.Production,
                "timeline-entries.update"
            ),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.TimelineEntriesUpdateRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.TimelineEntriesUpdateResponse.parseOrThrow(
                _response.body as serializers.TimelineEntriesUpdateResponse.Raw,
                { allowUnknownKeys: true }
            );
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new DevRev.BadRequest(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 401:
                    throw new DevRev.Unauthorized(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 403:
                    throw new DevRev.Forbidden(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 404:
                    throw new DevRev.NotFound(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 429:
                    throw new DevRev.TooManyRequests(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 500:
                    throw new DevRev.InternalServerError(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
                        })
                    );
                case 503:
                    throw new DevRev.ServiceUnavailable(
                        await serializers.ErrorBase.parseOrThrow(_response.error.body as serializers.ErrorBase.Raw, {
                            allowUnknownKeys: true,
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
}
