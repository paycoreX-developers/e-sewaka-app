import Header from "@/components/custom/Header";
import FilterTab from "./components/FiltertTab";

export default function page() {
  return (
    <main>
      <Header
        title="History Deposit"
        subtitle="Lihat dan kelola riwayat depost anda."
        backLink="/deposit"
      />
      <FilterTab  />
    </main>
  );
}
