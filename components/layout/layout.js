import MainNavigation from "./main-navigation";

function Layout({ childrent }) {
  return (
    <>
      <MainNavigation />
      <main>{childrent}</main>
    </>
  );
}
export default Layout;
