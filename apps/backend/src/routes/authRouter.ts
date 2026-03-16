import { Router } from 'express'
import { authController } from '../controllers'
import { authMiddleware } from '../middlewares/auth.middleware'
import { validator } from '../validators'
import { dataProvider } from '../dal/dataFactory'

const router = Router()
const controller = authController(dataProvider)

router.get('/me', authMiddleware, controller.me)
router.post('/signup', validator.signupValidator, controller.signup)
router.post('/signin', validator.signinValidator, controller.signin)
router.post('/logout', controller.logout)

export default router