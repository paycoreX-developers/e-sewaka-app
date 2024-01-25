import Swal from "sweetalert2";
import { currencyHelper } from "../helper";

export interface ResponseTopUp {
  amount: string;
  bank: string;
  bank_acc_name: string;
  bank_acc_num: string;
  dest: string;
  msg: string;
  phone: string;
  rc: string;
  unique_id: string;
}

export const topUpAlert = (response: ResponseTopUp, deposit: number) => {
  Swal.fire({
    html: `
        <div>
            <div class="flex border-b-2 my-5">
                <p class="pb-4">Menunggu Pembayaran</p>
            </div>
            <div className="w-full flex justify-center items-center text-center my-8">
                <img
                src="/assets/auth/${response.bank.toLowerCase()}.svg"
                alt=""
                className="my-3"
                />
            </div>
            <div class="w-full my-5 grid gap-3 grid-cols-2 text-grey-600 pb-10 border-b border-dashed">
                <p class="text-start">Detail Request Top Up</p>
                <p class="text-end">${currencyHelper(deposit)}</p>
                <p class="text-start">Kode Unik</p>
                <p class="text-end">${response.unique_id}</p>
                <p class="text-start">Total Pembayaran</p>
                <p class="text-end">${currencyHelper(
                  Number(response.amount)
                )}</p>
            </div>
            <div class="w-full my-5 grid gap-3">
                <p class="text-start">Transfer ke</p>
                <p class="text-start">BCA <span class="font-bold">${
                  response.bank_acc_num
                }</span></p>
                <p class="text-start">A/N <span class="font-bold">${
                  response.bank_acc_name
                }</span></p>
            </div>
        </div>`,
    showConfirmButton: false,
    heightAuto: true,
    showCancelButton: true,
    cancelButtonText: "Tutup",
    cancelButtonColor: "#DD6B55",
  });
};
