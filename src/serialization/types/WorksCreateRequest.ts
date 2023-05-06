/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WorksCreateRequest: core.serialization.Schema<
    serializers.WorksCreateRequest.Raw,
    DevRev.WorksCreateRequest
> = core.serialization
    .union("type", {
        issue: core.serialization.lazyObject(async () => (await import("..")).WorksCreateRequestIssue),
        ticket: core.serialization.lazyObject(async () => (await import("..")).WorksCreateRequestTicket),
    })
    .transform<DevRev.WorksCreateRequest>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace WorksCreateRequest {
    type Raw = WorksCreateRequest.Issue | WorksCreateRequest.Ticket;

    interface Issue extends serializers.WorksCreateRequestIssue.Raw {
        type: "issue";
    }

    interface Ticket extends serializers.WorksCreateRequestTicket.Raw {
        type: "ticket";
    }
}