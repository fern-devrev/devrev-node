/**
 * This file was auto-generated by Fern from our API Definition.
 */

import { DevRev } from "@fern-api/devrev";

export interface Tag extends DevRev.AtomBase {
    /**
     * The allowed values for the tag, where a value is provided when a
     * tag is associated with an object. If empty, then no value should be
     * provided when the association is made.
     *
     */
    allowedValues?: string[];
    /**
     * An informative description for the tag that should provide context
     * on the tag's purpose and usage.
     *
     */
    description?: string;
    /**
     * The name of the tag, which denotes the logical concept by which all
     * tagged objects will be associated. The name is guaranteed to be
     * unique.
     *
     */
    name: string;
}
