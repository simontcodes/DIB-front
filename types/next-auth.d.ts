// import { User } from './interfaces'

// declare module "next-auth" {
//   interface Session {
//     user: User;
//   }
// }

import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: User;
  }

  interface User {
    id: any;
    name: string | null | undefined;
    role: string | undefined;
    team: string | undefined;
    token: any;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string | null | undefined;
    role: string | undefined;
    team: string | undefined;
    token: any;
  }
}
