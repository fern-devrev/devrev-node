/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "../../../..";

export interface WorksExportRequest {
    /**
     * Filters for work belonging to any of the provided parts.
     */
    appliesToPart?: string | string[];
    /**
     * Filters for work created by any of these users.
     */
    createdBy?: string | string[];
    /**
     * The number of work items to return. The default is '50', the maximum
     * is '5000'.
     *
     */
    first?: number;
    /**
     * Filters for issues with any of the provided priorities.
     */
    issuePriority?: DevRev.IssuePriority | DevRev.IssuePriority[];
    /**
     * Filters for issues with any of the provided Rev organizations.
     *
     */
    issueRevOrgs?: string | string[];
    /**
     * Filters for work owned by any of these users.
     */
    ownedBy?: string | string[];
    /**
     * Filters for records in the provided stage(s).
     */
    stageName?: string | string[];
    /**
     * Filters for tickets belonging to specific groups.
     */
    ticketGroup?: string | string[];
    /**
     * Filters for tickets that are associated with any of the provided Rev
     * organizations.
     *
     */
    ticketRevOrg?: string | string[];
    /**
     * Filters for tickets with any of the provided severities.
     */
    ticketSeverity?: DevRev.TicketSeverity | DevRev.TicketSeverity[];
    /**
     * Filters for work of the provided types.
     */
    type?: DevRev.WorkType | DevRev.WorkType[];
}
