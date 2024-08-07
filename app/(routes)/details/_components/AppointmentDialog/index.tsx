"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import "./index.css";
import AppointmentForm from "../AppointmentForm";

/*~~~~~~~~$ AppointmentDialog Component $~~~~~~~~*/
const AppointmentDialog = ({
  doctorID,
  className,
}: {
  doctorID: string;
  className?: string;
}) => {
  /*~~~~~~~~$ States $~~~~~~~~*/
  const [open, setOpen] = useState(false);

  /*~~~~~~~~$ Handlers $~~~~~~~~*/
  const closeFormHandler = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        className={`appointment-dialog__trigger bg-primary ${className}`}
        style={{ borderRadius: "0.5rem" }}
      >
        Book Appointment
      </DialogTrigger>
      <DialogContent
        className="bg-white h-[80%] w-[92%] overflow-x-hidden overflow-y-scroll scrollbar-none scroll-smooth lg:scrollbar-thin lg:scrollbar-thumb-blue-600 lg:scrollbar-track-blue-200"
        style={{ borderRadius: ".8rem" }}
      >
        <DialogHeader className="mt-10">
          <DialogTitle className="text-primary font-bold tracking-wider text-3xl whitespace-nowrap">
            Book an Appointment
          </DialogTitle>
          <DialogDescription className="text-gray-500 font-semibold tracking-wide">
            Please fill out the form below to book an appointment.
          </DialogDescription>
        </DialogHeader>
        <AppointmentForm
          doctorID={doctorID}
          closeFormHandler={closeFormHandler}
        />
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentDialog;
