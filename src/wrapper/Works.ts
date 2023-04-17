import { Works as FernWorks } from "../api/resources/works/client/Client";
import { DevRev } from "..";

export class Works extends FernWorks {
    /**
     * Creates new work ([issue](https://devrev.ai/docs/product/build),
     * [ticket](https://devrev.ai/docs/product/support)) item, using
     * the default user ID and part ID.
     *
     * @throws {DevRev.BadRequestError}
     * @throws {DevRev.UnauthorizedError}
     * @throws {DevRev.ForbiddenError}
     * @throws {DevRev.NotFoundError}
     * @throws {DevRev.TooManyRequestsError}
     * @throws {DevRev.InternalServerError}
     * @throws {DevRev.ServiceUnavailableError}
     */
    public async create(request: DevRev.WorksCreateRequest): Promise<DevRev.WorksCreateResponse> {
        // TODO call preference API to get default user_id and part_id

        return super.create(request);
    }
}
