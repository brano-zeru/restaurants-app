const VITE_SERVER_URL: string = import.meta.env.VITE_SERVER_URL

export const fetchApi = async <T> (input: string, method: 'GET' | 'POST' | 'PUT' | 'DELETE', body?: object ) => {
    const url = new URL(input, VITE_SERVER_URL)

    const response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method,
        credentials: 'include',
        ...(body ? { body: JSON.stringify(body) } : {})
    })

    if (response.status === 401) { 
        localStorage.removeItem('token')
    }
    return response.json() as T
}