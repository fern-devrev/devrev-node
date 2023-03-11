/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";

const _Base = core.serialization.object({
    appliesToPart: core.serialization.property("applies_to_part", core.serialization.string().optional()),
    artifacts: core.serialization
        .lazyObject(async () => (await import("../../..")).WorksUpdateRequestArtifactIds)
        .optional(),
    body: core.serialization.string().optional(),
    customSchemaFragments: core.serialization.property(
        "custom_schema_fragments",
        core.serialization.list(core.serialization.string()).optional()
    ),
    id: core.serialization.string(),
    ownedBy: core.serialization.property(
        "owned_by",
        core.serialization.lazyObject(async () => (await import("../../..")).WorksUpdateRequestOwnedBy).optional()
    ),
    reportedBy: core.serialization.property(
        "reported_by",
        core.serialization.lazyObject(async () => (await import("../../..")).WorksUpdateRequestReportedBy).optional()
    ),
    stage: core.serialization.lazyObject(async () => (await import("../../..")).StageUpdate).optional(),
    tags: core.serialization.lazyObject(async () => (await import("../../..")).WorksUpdateRequestTags).optional(),
    targetCloseDate: core.serialization.property("target_close_date", core.serialization.date().optional()),
    title: core.serialization.string().optional(),
});
export const WorksUpdateRequest: core.serialization.Schema<
    serializers.WorksUpdateRequest.Raw,
    DevRev.WorksUpdateRequest
> = core.serialization
    .union("type", {
        issue: core.serialization
            .lazyObject(async () => (await import("../../..")).WorksUpdateRequestIssue)
            .extend(_Base),
        none: core.serialization.object({}).extend(_Base),
        ticket: core.serialization
            .lazyObject(async () => (await import("../../..")).WorksUpdateRequestTicket)
            .extend(_Base),
    })
    .transform<DevRev.WorksUpdateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorksUpdateRequest {
    type Raw = WorksUpdateRequest.Issue | WorksUpdateRequest.None | WorksUpdateRequest.Ticket;

    interface Issue extends _Base, serializers.WorksUpdateRequestIssue.Raw {
        type: "issue";
    }

    interface None extends _Base {
        type: "none";
    }

    interface Ticket extends _Base, serializers.WorksUpdateRequestTicket.Raw {
        type: "ticket";
    }

    interface _Base {
        applies_to_part?: string | null;
        artifacts?: serializers.WorksUpdateRequestArtifactIds.Raw | null;
        body?: string | null;
        custom_schema_fragments?: string[] | null;
        id: string;
        owned_by?: serializers.WorksUpdateRequestOwnedBy.Raw | null;
        reported_by?: serializers.WorksUpdateRequestReportedBy.Raw | null;
        stage?: serializers.StageUpdate.Raw | null;
        tags?: serializers.WorksUpdateRequestTags.Raw | null;
        target_close_date?: string | null;
        title?: string | null;
    }
}
