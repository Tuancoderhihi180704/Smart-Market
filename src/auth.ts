import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("check credentials :" , credentials);
        
        let user = null; 
        
        user = {
           _id: "123",
            username: "123",
            email:"123",
            full_name : "123",
            isVerify: "123",
            type: "123",
           role: "123",
        }
 
        // logic to salt and hash password
        //Call backend
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
})