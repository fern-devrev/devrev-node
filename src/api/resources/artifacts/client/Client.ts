/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { DevRev } from "@fern-api/devrev";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization";
import * as errors from "../../../../errors";

export declare namespace Artifacts {
    interface Options {
        environment?: environments.DevRevEnvironment | string;
        apiKey: core.Supplier<string>;
    }
}

/**
 * Artifact (file) management APIs.
 */
export class Artifacts {
    constructor(private readonly options: Artifacts.Options) {}

    /**
     * Gets the download URL for the artifact.
     */
    public async locate(request: DevRev.LocateArtifactsRequest): Promise<DevRev.ArtifactsLocateResponse> {
        const { id } = request;
        const _queryParams = new URLSearchParams();
        _queryParams.append("id", id);
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "artifacts.locate"),
            method: "GET",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            queryParameters: _queryParams,
        });
        if (_response.ok) {
            return await serializers.ArtifactsLocateResponse.parseOrThrow(
                _response.body as serializers.ArtifactsLocateResponse.Raw,
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
     * Creates an artifact and generates an upload URL for its data.
     *
     */
    public async prepare(request: DevRev.ArtifactsPrepareRequest): Promise<DevRev.ArtifactsPrepareResponse> {
        const _response = await core.fetcher({
            url: urlJoin(this.options.environment ?? environments.DevRevEnvironment.Production, "artifacts.prepare"),
            method: "POST",
            headers: {
                Authorization: await core.Supplier.get(this.options.apiKey),
            },
            body: await serializers.ArtifactsPrepareRequest.jsonOrThrow(request),
        });
        if (_response.ok) {
            return await serializers.ArtifactsPrepareResponse.parseOrThrow(
                _response.body as serializers.ArtifactsPrepareResponse.Raw,
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
