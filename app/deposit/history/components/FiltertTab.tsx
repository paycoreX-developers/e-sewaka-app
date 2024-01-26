"use client";

import { Button } from "@/components/ui/button";
import { Formik, Form } from "formik";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { FaFilter } from "react-icons/fa";
import dayjs from "dayjs";
import axios from "axios";
import DataTable from "react-data-table-component";
import { currencyHelper } from "@/utils/helper";
import "react-datepicker/dist/react-datepicker.css";
import { useAuth } from "@/app/authContext";

export const columns = [
  {
    name: "No.",
    selector: (row: any) => row.row_num,
    width: "75px",
  },
  {
    name: "Tanggal",
    selector: (row: any) => <span>{row.trx_date}</span>,
  },
  // {
  // 	name: "Waktu",
  // 	selector: (row: any) => row.waktu,
  // },
  {
    name: "Total Bayar",
    selector: (row: any) => <span>{currencyHelper(Number(row.value))}</span>,
  },
  {
    name: "Metode Pembayaran",
    selector: (row: any) => row.payment_method,
  },
  {
    name: "No. Pembayaran",
    selector: (row: any) => row.no_rek,
  },
  {
    name: "Status",
    selector: (row: any) =>
      row.ending_balance !== "0" ? (
        row.ending_balance
      ) : (
        <p className="bg-red-500 text-white p-2 rounded-full">Expired</p>
      ),
  },
];

const FilterTab: React.FC = () => {
  const [histories, setHistories] = useState([]);
  const [error, setError] = useState<boolean>(false);

  const { uuid, token } = useAuth();

  const initialValuess = {
    date_start: new Date(),
    date_end: new Date(),
    uuid: uuid,
    row_start: "0",
    is_summary: "1",
  };

  const handlerSubmitDatePicker = async (data: any) => {
    const start = dayjs(data.date_start).format("YYYYMMDD");
    const end = dayjs(data.date_end).format("YYYYMMDD");
    let payload = {
      date_start: start,
      date_end: end,
      uuid: data.uuid,
      row_start: "0",
      is_summary: "1",
    };

    await axios({
      url: "/api/apps/balance/deposit_history",
      method: "POST",
      headers: {
        x_access_token: token,
        "Content-Type": "application/JSON",
      },
      data: JSON.stringify(payload),
    })
      .then((res) => {
        if (res.status === 200) {
          setHistories(res.data.data);
        }
      })
      .catch((err) => {
        setError(err.response.data.msg);
      });
  };

  return (
    <>
      <div className="w-full min-h-[100px]  rounded-t-3xl p-5">
        <Formik
          onSubmit={(value) => handlerSubmitDatePicker(value)}
          initialValues={initialValuess}
        >
          {({ setFieldValue, values }) => (
            <Form>
              <div className="h-[60px] flex justify-end gap-4">
                <div className="">
                  <label
                    htmlFor="start"
                    className="block mb-1 ps-3 font-semibold"
                  >
                    Start
                  </label>
                  <ReactDatePicker
                    className="py-2 px-4 border-[1px] rounded-full min-w-[200px]"
                    placeholderText="Start Date"
                    name="start"
                    selected={values.date_start}
                    onChange={(date: any) => setFieldValue("date_start", date)}
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="start"
                    className="block mb-1 ps-3 font-semibold"
                  >
                    End
                  </label>
                  <ReactDatePicker
                    className="py-2 px-4 border-[1px] rounded-full min-w-[200px]"
                    placeholderText="End Date"
                    name="end"
                    selected={values.date_end}
                    onChange={(date: any) => setFieldValue("date_end", date)}
                  />
                </div>
                <div className="pt-7 grid items-end">
                  <Button type="submit" className="bg-blue-600" size="sm">
                    <FaFilter className="" />
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="w-full bg-white min-h-full ">
        {error ? (
          <div className="">Somethings Wrong</div>
        ) : (
          <DataTable
            columns={columns}
            data={histories}
            selectableRows
            pagination
          />
        )}
      </div>
    </>
  );
};

export default FilterTab;
