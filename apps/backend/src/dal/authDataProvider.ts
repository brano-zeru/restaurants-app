import { query } from "../config"

export const authDataProvider = () => {
    const signup = async (username: string, email: string, password: string) => {
        try {
            const result = await query(
                `INSERT INTO restaurant.users (username, email, password) 
                VALUES ($1, $2, $3) RETURNING *;`
            , [username, email, password])
            return result.rows[0]
        } catch (error) {
            console.error('Error in authDataProvider.signup:', error)
            throw error
        }
    }

    const signin = async (username: string, password: string) => {
        try {
            const result = await query(
                `SELECT id, username, email FROM restaurant.users WHERE (username = $1 OR email = $1)
                AND password = $2;`
            , [username, password])
            if (result.rows.length === 0) {
                throw new Error('User not found')
            }
            return result.rows[0]
        } catch (error) {
            console.error('Error in authDataProvider.signin:', error)
            throw error
        }
    }

    return {
        signup,
        signin
    }
}