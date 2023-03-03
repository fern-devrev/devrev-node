/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface WorksCreateRequestTicket {
    /** The Rev organization that the ticket is associated with. */
    revOrg?: string;
    severity?: DevRev.TicketSeverity;
    /**
     * The [part](https://devrev.ai/docs/product/parts) that the work
     * applies to. Specifying a part is required when creating tickets and
     * issues.
     *
     */
    appliesToPart: string;
    /**
     * The IDs of the artifacts to associate with the work item.
     *
     */
    artifacts?: string[];
    /** Body of the work object. */
    body?: string;
    /** The users that own the work. */
    ownedBy: string[];
    /** The users that reported the work. */
    reportedBy?: string[];
    stage?: DevRev.StageInit;
    /** Tags associated with the work item. */
    tags?: DevRev.SetTagWithValue[];
    /** Timestamp for when the work is expected to be complete. */
    targetCloseDate?: string;
    /** Title of the work object. */
    title: string;
}
