import { check, validationResult } from 'express-validator'

const validateName = check('name')
    .isLength({min: 3})
    .withMessage('wrong name')

const validateEmail = check('email')
    .isEmail()
    .withMessage('wrong email')

const validatePassword = check('password')
    .isLength({min: 6})
    .withMessage('wrong password')

const signUpnValidation = [validateName, validateEmail, validatePassword]

export {signUpnValidation, validationResult}