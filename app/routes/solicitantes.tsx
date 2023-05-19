import { Outlet } from "@remix-run/react";

export default function SolicitantesRoute() {
  return (
    <div>
      <h1>Sesión como Solicitante 😎</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
