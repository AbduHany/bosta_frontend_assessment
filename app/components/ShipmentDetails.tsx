"use client";
import React, { useEffect, useState } from "react";
import { Steps } from "antd";
import { Circle } from "lucide-react";
import axios from "axios";
import { ShipmentDetailsType } from "@/types/shipmentDetailsType";
import { toast } from "sonner";
import { DictionaryType } from "@/types/dictionaryType";

const ShipmentDetails = ({
  trackingID,
  messages,
}: {
  trackingID: string;
  messages: DictionaryType;
}) => {
  const [shipmentDetails, setShipmentDetails] =
    useState<ShipmentDetailsType | null>();
  useEffect(() => {
    if (trackingID) {
      toast.loading("Fetching shipment details");

      axios
        .get(`https://tracking.bosta.co/shipments/track/${trackingID}`, {
          headers: {
            "x-requested-by": "Bosta",
          },
        })
        .then((response) => response.data)
        .then((data) => {
          setShipmentDetails(data);
          console.log(data);
          toast.dismiss();
          toast.success("Shipment details fetched successfully", {
            richColors: true,
          });
        })
        .catch((error) => {
          toast.dismiss();
          toast.error("Invalid Tracking ID", { richColors: true });
          console.log(error);
        });
    }
  }, [trackingID]);

  // Greencheck SVG
  const greenCheck = (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM14.2774 7.98323C14.5719 7.69195 14.5745 7.21708 14.2832 6.92259C13.9919 6.62809 13.5171 6.62549 13.2226 6.91677L8.59375 11.4951L6.77741 9.69859C6.48292 9.4073 6.00805 9.40991 5.71677 9.7044C5.42549 9.9989 5.42809 10.4738 5.72259 10.765L8.06634 13.0832C8.35855 13.3723 8.82895 13.3723 9.12116 13.0832L14.2774 7.98323Z"
        fill="#0098A5"
      ></path>
    </svg>
  );
  return (
    <>
      {!shipmentDetails ? (
        <div className="w-full h-[calc(100vh-338px)] flex justify-center items-center">
          Enter ID to track your shipment 📦
        </div>
      ) : (
        <div className={`w-full flex justify-center mt-16`}>
          <div className="mx-3 w-full max-w-[968px]">
            {/* Shipment details */}
            <div className="p-4 border-t border-l border-r border-[#E4E7EC] rounded-t-xl">
              <p className="text-[12px] text-[#667085]">
                {messages.shipmentMessages.order} #{trackingID}
              </p>
              <h2 className="text-[24px] font-bold">
                {
                  messages.shipmentMessages[
                    shipmentDetails.CurrentStatus
                      .state as keyof typeof messages.shipmentMessages
                  ]
                }
              </h2>
              <p className="text-[14px] text-[#667085]">
                Your order is expected to arrive within 2 -3 working days.
              </p>
            </div>

            {/* Delivery Timeline */}
            <div className="p-4 border border-[#E4E7EC] rounded-b-xl ">
              <Steps
                size="small"
                responsive
                current={2}
                status="wait"
                labelPlacement="vertical"
              >
                <Steps.Step
                  title="Shipment Created"
                  subTitle="Saturday Nov. 10"
                  icon={greenCheck}
                ></Steps.Step>
                <Steps.Step
                  title="Picked Up"
                  subTitle="Saturday Nov. 10"
                  icon={greenCheck}
                ></Steps.Step>
                <Steps.Step title="Processing" icon={greenCheck}></Steps.Step>
                <Steps.Step
                  icon={<Circle className="size-5" />}
                  title="Out For Delivery"
                ></Steps.Step>
                <Steps.Step
                  icon={<Circle className="size-5" />}
                  title="Delivered"
                ></Steps.Step>
              </Steps>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShipmentDetails;
