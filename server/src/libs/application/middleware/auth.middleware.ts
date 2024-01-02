import { check, validationResult } from 'express-validator'

const validateEmail = check('username')
    .isEmail()
    .withMessage('wrong email')

const validatePassword = check('password')
    .isLength({min: 6})
    .withMessage('wrong password')

const signInValidation = [validateEmail, validatePassword]

export { signInValidation, validationResult }