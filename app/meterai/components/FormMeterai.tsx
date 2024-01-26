"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";
import DropzoneMeterai from "./DropzoneMeterai";
import CoordinateView from "./CoordinateView";

const FormMeterai: React.FC = () => {
  const [toCoordinate, setToCoordinat] = useState<boolean>(false);
  const [file, setFile] = useState<any>(null);

  const uploadHandler = (body: any) => {
    let payload = body;
    const arrSplit = body.files.split("base64,");
    payload.files = arrSplit[1];
    console.log(payload);
    if (payload.files) {
      setToCoordinat(true);
    }
  };

  return (
    <Formik
      onSubmit={(values) => {
        uploadHandler(values);
      }}
      initialValues={{
        date: new Date(),
        id: "",
        tipe: "",
        qty: "",
        files: "",
      }}
    >
      {({ values, setFieldValue, isValid, dirty }) => (
        <Form>
          <div className="w-full flex flex-col lg:flex-row py-5">
            <div
              className={
                toCoordinate
                  ? `hidden lg:block lg:mt-5 lg:bg-white lg:p-5 shadow-lg lg:shadow-none rounded-2xl lg:rounded-none
										lg:rounded-tl-3xl lg:rounded-bl-3xl w-full lg:w-1/3 2xl:w-1/2`
                  : ` mt-5 bg-white p-5 shadow-lg lg:shadow-none rounded-2xl lg:rounded-none
						 				lg:rounded-tl-3xl lg:rounded-bl-3xl w-full 2xl:w-1/2`
              }
            >
              <div className="flex flex-col gap-2 my-5 ">
                <label className="text-sm pl-3 font-semibold" htmlFor="date">
                  Tanggal Dokumen
                </label>
                <DatePicker
                  selected={values.date}
                  className="w-full py-2 px-4 border-[1px] rounded-full text-sm 2xl:text-base"
                  onChange={(date: any) => setFieldValue("date", date)}
                />
              </div>
              <div className="flex flex-col gap-2 my-5 ">
                <label className="text-sm pl-3 font-semibold" htmlFor="id">
                  Nomor Dokumen
                </label>
                <Field
                  className="py-2 px-4 border-[1px] rounded-full text-sm 2xl:text-base"
                  placeholder="Masukkan Nomor Dokumen"
                  name="id"
                />
              </div>
              <div className="flex flex-col gap-2 my-5 ">
                <label className="text-sm pl-3 font-semibold" htmlFor="type">
                  Tipe Dokumen
                </label>
                <Field
                  className="py-2 px-4 border-[1px] rounded-full text-sm 2xl:text-base"
                  as="select"
                  name="type"
                >
                  <option value="#">Pilih Jenis Dokumen</option>
                  <option value="pdf">PDF</option>
                </Field>
              </div>
              <div className="flex flex-col gap-2 my-5 ">
                <label className="text-sm pl-3 font-semibold" htmlFor="qty">
                  Banyaknya Dokumen yang akan diupload
                </label>
                <div className="flex flex-col lg:flex-row gap-5">
                  <label className="2xl:h-[150px] h-[100px] text-blue-700 bg-blue-50 rounded-xl cursor-pointer w-full lg:w-1/2">
                    <Field
                      name="qty"
                      type="radio"
                      value="single"
                      className="hidden peer"
                    />
                    <div
                      className=" peer-checked:border-blue-500 peer-checked:border-2 peer-checked:rounded-xl peer-checked:text-blue-500
										peer-checked:h-full peer-checked:w-full w-full h-full flex flex-col justify-center items-center peer-checked:font-bold 
										peer-checked:flex peer-checked:flex-col peer-checked:justify-center peer-checked:items-center text-xs text-center 2xl:text-lg"
                    >
                      Single <br className="2xl:hidden" /> Document
                      <img
                        src="/assets/logo/doc.png"
                        alt=""
                        className="w-[25px] peer-checked:w-[25px] 2xl:w-auto"
                      />
                    </div>
                  </label>
                  <label className="2xl:h-[150px] h-[100px] text-blue-700 bg-blue-50 rounded-xl cursor-pointer w-full lg:w-1/2">
                    <Field
                      name="qty"
                      type="radio"
                      value="multiple"
                      className="hidden peer"
                    />
                    <div
                      className=" peer-checked:border-blue-500 peer-checked:border-2 peer-checked:rounded-xl peer-checked:text-blue-500
											peer-checked:h-full peer-checked:w-full w-full h-full flex flex-col justify-center items-center peer-checked:font-bold 
											peer-checked:flex peer-checked:flex-col peer-checked:justify-center peer-checked:items-center text-xs text-center 2xl:text-lg"
                    >
                      Multiple
                      <br className="2xl:hidden" /> Document
                      <img
                        src="/assets/logo/multi_doc.png"
                        alt=""
                        className="w-[50px] peer-checked:w-[50px] 2xl:w-auto"
                      />
                    </div>
                  </label>
                </div>
              </div>
              <div className="">
                <Button
                  variant="default"
                  disabled={
                    values.files !== "" &&
                    values.qty !== "" &&
                    values.tipe !== ""
                  }
                  className="w-full bg-blue-500"
                  type="submit"
                >
                  Upload
                </Button>
              </div>
            </div>
            <div
              className="mt-5 bg-white p-5 shadow-lg lg:shadow-none rounded-2xl lg:rounded-none
						 lg:rounded-tr-3xl lg:rounded-br-3xl  w-full 2xl:w-1/2"
            >
              {toCoordinate ? (
                <CoordinateView
                  file={file}
                  setFile={setFile}
                  setToCoordinat={setToCoordinat}
                />
              ) : (
                <DropzoneMeterai
                  setFieldValue={setFieldValue}
                  setFiles={setFile}
                />
              )}
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormMeterai;
