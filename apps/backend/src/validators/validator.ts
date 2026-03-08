import { initValidatorMiddleware } from "../middlewares/validator.middleware"
import { schemas } from "./schemas"

export const validator = {
    signinValidator: initValidatorMiddleware(schemas.signinSchema),
    signupValidator: initValidatorMiddleware(schemas.signupSchema)
}