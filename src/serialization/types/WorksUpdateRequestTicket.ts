/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const WorksUpdateRequestTicket: core.serialization.ObjectSchema<
    serializers.WorksUpdateRequestTicket.Raw,
    DevRev.WorksUpdateRequestTicket
> = core.serialization.object({
    group: core.serialization.string().optional(),
    revOrg: core.serialization.property("rev_org", core.serialization.string().optional()),
    severity: core.serialization.lazy(async () => (await import("..")).TicketSeverity).optional(),
});

export declare namespace WorksUpdateRequestTicket {
    interface Raw {
        group?: string | null;
        rev_org?: string | null;
        severity?: serializers.TicketSeverity.Raw | null;
    }
}