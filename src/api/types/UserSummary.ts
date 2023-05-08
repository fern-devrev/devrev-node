/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as DevRev from "..";

export type UserSummary = DevRev.UserSummary.DevUser | DevRev.UserSummary.RevUser | DevRev.UserSummary.SysUser;

export declare namespace UserSummary {
    interface DevUser extends DevRev.UserBaseSummary {
        type: "dev_user";
    }

    interface RevUser extends DevRev.RevUserSummary {
        type: "rev_user";
    }

    interface SysUser extends DevRev.UserBaseSummary {
        type: "sys_user";
    }
}
