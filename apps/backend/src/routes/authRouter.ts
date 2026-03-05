import { Router } from 'express'
import { authController } from '../controlers/authController'
import { authMiddleware } from '../middleware/authMiddleware'

const router = Router()

router.get('/me', authMiddleware, authController().me)
router.post('/signup', authController().signup)
router.post('/signin', authController().signin)
router.post('/logout', authController().logout)

export default router