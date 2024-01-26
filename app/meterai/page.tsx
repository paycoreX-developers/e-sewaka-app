import Header from "@/components/custom/Header";
import FormMeterai from "./components/FormMeterai";

export default function page() {
  return (
    <main>
      <Header
        title="e-Meterai"
        subtitle="Era  baru dengan e-materai - solusi revolusioner untuk keperluan materai Anda."
      />
      <div className="w-full">
				<FormMeterai />
			</div>
    </main>
  );
}
