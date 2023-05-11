export const getToken = () => {
    if (typeof window === 'undefined') return
    const sessionToken = window.sessionStorage.getItem('token') || ''
    return sessionToken
}

export const setToke = (token: string) => {
    if (typeof window === 'undefined') return
    window.sessionStorage.setItem('token', token)
}

export const clearToken = () => {
    if (typeof window === 'undefined') return
    window.sessionStorage.removeItem('token')
}

