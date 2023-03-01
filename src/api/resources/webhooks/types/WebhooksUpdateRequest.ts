/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

/**
 * The request to update a webhook.
 */
export interface WebhooksUpdateRequest {
    action?: DevRev.WebhooksUpdateAction;
    eventTypes?: DevRev.WebhooksUpdateRequestEventTypes;
    /** ID for the webhook. */
    id: string;
    /**
     * If provided, updates the secret that's used when verifying webhook
     * events, which must be between 8 and 32 bytes (inclusive). Otherwise
     * if empty, then a new secret is generated. If the webhook is active,
     * then its status will transition to the 'unverified' state and it
     * won't receive any object events until successfully verified.
     *
     */
    secret?: string;
    /**
     * The webhook's updated URL. If the webhook is active, then the
     * webhook's status will transition to the 'unverified' state and it
     * won't receive any object events until successfully verified.
     *
     */
    url?: string;
}
