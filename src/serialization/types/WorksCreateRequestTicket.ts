/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WorksCreateRequestTicket: core.serialization.ObjectSchema<
    serializers.WorksCreateRequestTicket.Raw,
    DevRev.WorksCreateRequestTicket
> = core.serialization.object({
    group: core.serialization.string().optional(),
    revOrg: core.serialization.property("rev_org", core.serialization.string().optional()),
    severity: core.serialization.lazy(async () => (await import("..")).TicketSeverity).optional(),
});

export declare namespace WorksCreateRequestTicket {
    interface Raw {
        group?: string | null;
        rev_org?: string | null;
        severity?: serializers.TicketSeverity.Raw | null;
    }
}
