import React, { useEffect, useState } from 'react'
import { userService } from '../services/user/user.service.local'

export function LoginSignUp() {
    const user = useSelector(state => state.userModule.user)

}