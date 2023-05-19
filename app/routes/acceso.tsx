import { Outlet } from "@remix-run/react";

export default function Acceso() {
  return (
    <div>
      <h1>Acceder</h1>
      <Outlet />
    </div>
  );
}
