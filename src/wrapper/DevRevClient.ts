import { DevRevClient as FernClient } from "../Client";
import { DevRev } from "@fern-api/devrev";
import { Works } from "./Works";

export class DevRevClient extends FernClient {
    public async createWorkAndTags(request: DevRev.WorksCreateRequest): Promise<DevRev.WorksCreateResponse> {
        // first, create all the tags
        if (request.tags != null) {
            for (const tag of request.tags) {
                await this.tags.create({
                    name: tag.id,
                });
            }
        }

        // then, create the work
        const createWorkResponse = await this.works.create(request);

        return createWorkResponse;
    }

    protected __works: Works | undefined;

    public get works(): Works {
        return (this.__works ??= new Works(this.options));
    }
}
