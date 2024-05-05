// export const verifyAuth = async (token: string) => {
//   try {
//     const verified = await jwt;
//   } catch (error) {}
// };
// export const refreshToken = async (token: string): Promise<string> => {
//   try {

import { cookies } from 'next/headers';

//   } catch (error) {

//   }
//   return "";
// };

export const getRoleCookies = (): string | undefined => {
  const cookiesStore = cookies();
  const cookiesSessionRole = cookiesStore.get('user-session')?.value;
  return cookiesSessionRole;
};
