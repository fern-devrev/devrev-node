/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../..";
import { DevRev } from "@fern-api/devrev";
import * as core from "../../../../core";

export const UserSummary: core.serialization.Schema<serializers.UserSummary.Raw, DevRev.UserSummary> =
    core.serialization
        .union("type", {
            dev_user: core.serialization.lazyObject(async () => (await import("../../..")).DevUserSummary),
            rev_user: core.serialization.lazyObject(async () => (await import("../../..")).RevUserSummary),
            sys_user: core.serialization.lazyObject(async () => (await import("../../..")).SysUserSummary),
        })
        .transform<DevRev.UserSummary>({
            transform: (value) => value,
            untransform: (value) => value,
        });

export declare namespace UserSummary {
    type Raw = UserSummary.DevUser | UserSummary.RevUser | UserSummary.SysUser;

    interface DevUser extends serializers.DevUserSummary.Raw {
        type: "dev_user";
    }

    interface RevUser extends serializers.RevUserSummary.Raw {
        type: "rev_user";
    }

    interface SysUser extends serializers.SysUserSummary.Raw {
        type: "sys_user";
    }
}
