"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Filter, Trash } from "lucide-react";
import Link from "next/link";
import React from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "No.",
    selector: (row: any) => row.row_num,
    width: "75px",
  },
  {
    name: "Document",
    selector: (row: any) => <span>{row.document}</span>,
  },
  // {
  // 	name: "Waktu",
  // 	selector: (row: any) => row.waktu,
  // },
  {
    name: "Date",
    selector: (row: any) => row.date,
  },
  {
    name: "Status",
    selector: (row: any) => {
      if (row.status === 0) {
        return (
          <div className="bg-red-100 border-[1px] border-red-500 text-red-500 p-2 rounded-full">
            Failed
          </div>
        );
      } else if (row.status === 1) {
        return (
          <div className="bg-yellow-100 border-[1px] border-yellow-500 text-yellow-500 p-2 rounded-full">
            In Progress
          </div>
        );
      } else {
        return (
          <div className="bg-green-2=100 border-[1px] border-green-500 text-green-500 p-2 rounded-full">
            Success
          </div>
        );
      }
    },
  },
  {
    name: "Serial Number",
    selector: (row: any) => row.sn,
  },
  {
    name: "Jenis Dokumen",
    selector: (row: any) => row.type,
  },
  {
    name: "Status",
    selector: (row: any) => {
      if (row.status === 1) return <span></span>;
      else if (row.status === 0) {
        return (
          <Link
            href="/meterai"
            className="w-fit bg-blue-200 text-blue-500 border-blue-400"
          >
            Menu e-Meterai
          </Link>
        );
      } else {
        return (
          <div className="flex">
            <Button variant="ghost">
              <Download className="text-green-600 text-sm h-4" />
            </Button>
            <Button variant="ghost">
              <Trash className="text-red-500 text-sm h-4" />
            </Button>
          </div>
        );
      }
    },
  },
];

const data = [
  {
    row_num: 1,
    document: "Perjanjian 1.pdf",
    date: "2 Desember 2023",
    status: 2,
    sn: "1123/VII/Dokumen-1",
    type: "Surat Perjanjian",
  },
  {
    row_num: 2,
    document: "Perjanjian 2.pdf",
    date: "2 Desember 2023",
    status: 2,
    sn: "1123/VII/Dokumen-1",
    type: "Surat Perjanjian",
  },
  {
    row_num: 3,
    document: "Perjanjian 3.pdf",
    date: "2 Desember 2023",
    status: 2,
    sn: "1123/VII/Dokumen-1",
    type: "Surat Perjanjian",
  },
  {
    row_num: 4,
    document: "Perjanjian 4.pdf",
    date: "2 Desember 2023",
    status: 2,
    sn: "1123/VII/Dokumen-1",
    type: "Surat Perjanjian",
  },
];

const TableDocument = () => {
  return (
    <div className="bg-white w-full relative top-5 rounded-3xl">
      <div className="flex gap-6 p-5">
        <Button className="bg-blue-500">
          <Filter className="h-4 mr-4" />
          Filter
        </Button>
        <Input className="w-[350px]" placeholder="Search..." />
      </div>
      <div className="">
        <DataTable columns={columns} data={data} pagination selectableRows />
      </div>
    </div>
  );
};

export default TableDocument;
