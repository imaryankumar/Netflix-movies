import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "765214818369-1oi1e0n2bjh012qg2r02a563ijicakfl.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId:"ea7e90c3af2bdae3f2b6",
      clientSecret:"c5d07088fbc9eca936cbd1f83380d18df11e1251"
    }),
  ],
}

export default NextAuth(authOptions)