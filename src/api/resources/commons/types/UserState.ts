/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * State of the user.
 */
export type UserState = "active" | "deactivated" | "locked" | "shadow" | "unassigned";

export const UserState = {
    Active: "active",
    Deactivated: "deactivated",
    Locked: "locked",
    Shadow: "shadow",
    Unassigned: "unassigned",
} as const;
