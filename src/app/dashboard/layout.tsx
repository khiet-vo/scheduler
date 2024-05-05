import { getRoleCookies } from '~/lib/auth';

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  return <section>{getRoleCookies() === 'employee' ? user : admin}</section>;
}
