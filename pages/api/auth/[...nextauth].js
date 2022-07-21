import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    // ...add more providers here
  ],
  session: {
    maxAge: 2592000 * 12, //12 months
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.username = session.user.name.replace(" ", "_").toLocaleLowerCase();
      session.user.uid = token.sub;
      return session;
    },
  },
});
