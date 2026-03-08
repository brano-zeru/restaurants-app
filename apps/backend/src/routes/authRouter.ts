import { Router } from 'express'
import { authController } from '../controlers'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validator } from '../validators'

const router = Router()
const controller = authController()

router.get('/me', authMiddleware, controller.me)
router.post('/signup', validator.signupValidator, controller.signup)
router.post('/signin', validator.signinValidator, controller.signin)
router.post('/logout', controller.logout)

export default router