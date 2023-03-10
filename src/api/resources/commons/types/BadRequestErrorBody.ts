/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export type BadRequestErrorBody =
    | DevRev.BadRequestErrorBody.BadRequest
    | DevRev.BadRequestErrorBody.MissingRequiredField
    | DevRev.BadRequestErrorBody.ParseError;

export declare namespace BadRequestErrorBody {
    interface BadRequest extends _Base {
        type: "bad_request";
    }

    interface MissingRequiredField extends DevRev.MissingRequiredFieldBody, _Base {
        type: "missing_required_field";
    }

    interface ParseError extends DevRev.ParseErrorBody, _Base {
        type: "parse_error";
    }

    interface _Base {
        /** The message associated with the error. */
        message?: string;
    }
}
