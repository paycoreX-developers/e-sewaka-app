import { Button } from "@/components/ui/button";
import Link from "next/link";
import BankList from "./components/BankList";

export default function page() {
  return (
    <main>
      <div className="mt-10">
        <div className="grid grid-cols-2 justify-between">
          <Link href="/dashboard">Back</Link>
          <div className="flex justify-end">
            <Link href="./history">
              <Button
                variant="link"
                className="flex items-center gap-3 font-semibold"
              >
                {/* <FaHistory /> */}
                Recent
              </Button>
            </Link>
          </div>
        </div>
        <BankList />
      </div>
    </main>
  );
}
