import { AdminUsecase, UserUsecase } from "../libs/usecases"
import { userRepository } from "../libs/application/repository"
import { sign, verify } from "../libs/application/auth/jwt"
import { signInValidation, validationResult } from "../libs/application/middleware/auth.middleware"
import { signUpnValidation } from "../libs/application/middleware/signup.middleware"
import multer from '../libs/application/auth/multer'

const useCases = {
    AdminUsecase,
    UserUsecase
}

const repository = {
    userRepository
}

const jwt = {
    sign,
    verify
}

const auth = {
    jwt,
    signInValidation,
    signUpnValidation,
    validationResult,
    multer
}

export = {
    useCases,
    repository,
    auth
}
