import {Router} from 'express'
import { users } from "./userRouter";
export const router:Router = Router()

router.use('/users',users)