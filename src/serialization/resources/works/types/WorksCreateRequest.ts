/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as core from "../../../../core";
import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";

const _Base = core.serialization.object({
    appliesToPart: core.serialization.property("applies_to_part", core.serialization.string()),
    artifacts: core.serialization.list(core.serialization.string()).optional(),
    body: core.serialization.string().optional(),
    ownedBy: core.serialization.property("owned_by", core.serialization.list(core.serialization.string())),
    reportedBy: core.serialization.property(
        "reported_by",
        core.serialization.list(core.serialization.string()).optional()
    ),
    stage: core.serialization.lazyObject(async () => (await import("../../..")).StageInit).optional(),
    tags: core.serialization
        .list(core.serialization.lazyObject(async () => (await import("../../..")).SetTagWithValue))
        .optional(),
    targetCloseDate: core.serialization.property("target_close_date", core.serialization.string().optional()),
    title: core.serialization.string(),
});
export const WorksCreateRequest: core.serialization.Schema<
    serializers.WorksCreateRequest.Raw,
    DevRev.WorksCreateRequest
> = core.serialization
    .union("type", {
        issue: core.serialization
            .lazyObject(async () => (await import("../../..")).WorksCreateRequestIssue)
            .extend(_Base),
        ticket: core.serialization
            .lazyObject(async () => (await import("../../..")).WorksCreateRequestTicket)
            .extend(_Base),
    })
    .transform<DevRev.WorksCreateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorksCreateRequest {
    type Raw = WorksCreateRequest.Issue | WorksCreateRequest.Ticket;

    interface Issue extends _Base, serializers.WorksCreateRequestIssue.Raw {
        type: "issue";
    }

    interface Ticket extends _Base, serializers.WorksCreateRequestTicket.Raw {
        type: "ticket";
    }

    interface _Base {
        applies_to_part: string;
        artifacts?: string[] | null;
        body?: string | null;
        owned_by: string[];
        reported_by?: string[] | null;
        stage?: serializers.StageInit.Raw | null;
        tags?: serializers.SetTagWithValue.Raw[] | null;
        target_close_date?: string | null;
        title: string;
    }
}
