/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "..";
import * as DevRev from "../../api";
import * as core from "../../core";

export const UserState: core.serialization.Schema<serializers.UserState.Raw, DevRev.UserState> =
    core.serialization.enum_(["active", "deactivated", "locked", "shadow", "unassigned"]);

export declare namespace UserState {
    type Raw = "active" | "deactivated" | "locked" | "shadow" | "unassigned";
}