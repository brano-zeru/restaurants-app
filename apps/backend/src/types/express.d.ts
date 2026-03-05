import { UserDTO } from "@restaurants-app/types";

declare global {
    namespace Express {
        interface Request {
            user?: UserDTO
        }
    }
}
