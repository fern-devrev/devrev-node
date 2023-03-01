/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const WebhooksUpdateAction: core.serialization.Schema<
    serializers.WebhooksUpdateAction.Raw,
    DevRev.WebhooksUpdateAction
> = core.serialization.enum_(["activate", "deactivate"]);

export declare namespace WebhooksUpdateAction {
    type Raw = "activate" | "deactivate";
}