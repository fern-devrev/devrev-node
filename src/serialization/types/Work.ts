/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const Work: core.serialization.Schema<serializers.Work.Raw, DevRev.Work> = core.serialization
    .union("type", {
        issue: core.serialization.lazyObject(async () => (await import("..")).Issue),
        ticket: core.serialization.lazyObject(async () => (await import("..")).Ticket),
    })
    .transform<DevRev.Work>({
        transform: (value) => value,
        untransform: (value) => value,
    });

export declare namespace Work {
    type Raw = Work.Issue | Work.Ticket;

    interface Issue extends serializers.Issue.Raw {
        type: "issue";
    }

    interface Ticket extends serializers.Ticket.Raw {
        type: "ticket";
    }
}
