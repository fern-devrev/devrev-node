/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export interface Webhook {
    /** The event types that the webhook will receive. */
    eventTypes?: DevRev.WebhookEventType[];
    /** The secret to use for verifying webhook events. */
    secret?: string;
    status?: DevRev.WebhookStatus;
    /** The URL of the webhook endpoint. */
    url?: string;
}