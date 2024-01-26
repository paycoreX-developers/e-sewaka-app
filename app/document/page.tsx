import Header from "@/components/custom/Header";
import TableDocument from "./components/TableDocument";

export default function page() {
  return (
    <main>
      <Header
        title="Document"
        subtitle="Era  baru dengan e-materai - solusi revolusioner untuk keperluan materai Anda."
      />
      <TableDocument />
    </main>
  );
}
