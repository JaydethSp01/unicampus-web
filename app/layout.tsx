export const dynamic = "force-dynamic";
import "./globals.css";
import { ProtectedShell } from "@/components/ui/ProtectedShell";

const NAV = [{ href: "/", label: "Inicio" }, { href: "/asistencia", label: "Asistencia" }, { href: "/estudiantes", label: "Estudiantes" }, { href: "/materias", label: "Materias" }, { href: "/matriculas", label: "Matriculas" }, { href: "/notas", label: "Notas" }, { href: "/usuarios", label: "Usuarios" }];

export const metadata = { title: "Universidad", description: "Generado con ScrumDev AI" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ProtectedShell items={NAV} title="Universidad">{children}</ProtectedShell>
      </body>
    </html>
  );
}
