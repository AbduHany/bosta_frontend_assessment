"use client";
import React, { useEffect, useRef, useState } from "react";
import { Steps } from "antd";
import { Circle } from "lucide-react";
import axios from "axios";
import { ShipmentDetailsType, TransitEvent } from "@/types/shipmentDetailsType";
import { toast } from "sonner";
import { DictionaryType } from "@/types/dictionaryType";
import TrackingDetails from "./TrackingDetails";
import { createDateString, groupEventsByDay } from "@/helpers/helperFunctions";
import { greenCheck } from "@/helpers/svgs";
import { CopyOutlined, WhatsAppOutlined } from "@ant-design/icons";
import ExportPDFButton from "./ExportPDFButton";

const ShipmentDetails = ({
  trackingID,
  messages,
  lang,
}: {
  trackingID: string;
  messages: DictionaryType;
  lang: string;
}) => {
  const [shipmentDetails, setShipmentDetails] =
    useState<ShipmentDetailsType | null>();
  const [groupedEvents, setGroupedEvents] = useState<
    Record<string, TransitEvent[]>
  >({});

  const activeStepRef = useRef(0);

  useEffect(() => {
    const shippingStepCodes = [
      "Shipment Created",
      "Picked Up",
      "Received at warehouse",
      "Out for delivery",
      "Delivered",
    ];
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
          activeStepRef.current = shippingStepCodes.indexOf(
            data.CurrentStatus.state
          );
          console.log(data);
          setGroupedEvents(groupEventsByDay(data.TransitEvents));
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

  return (
    <>
      {!shipmentDetails ? (
        <div className="w-full h-[calc(100vh-338px)] flex justify-center items-center">
          {messages.shipmentMessages.noID}
        </div>
      ) : (
        <div className={`w-full flex justify-center mt-16`}>
          <div className="mx-3 w-full max-w-[968px]">
            {/* Shipment details */}
            <div className="p-4 border border-[#E4E7EC] rounded-t-xl">
              {/* Shipment ID */}
              <p className="text-[12px] text-[#667085]">
                {messages.shipmentMessages.order} #{trackingID}
              </p>

              {/* Shipment Status */}
              <h2 className="text-[24px] font-bold">
                {
                  messages.shipmentMessages[
                    shipmentDetails.CurrentStatus
                      .state as keyof typeof messages.shipmentMessages
                  ]
                }
              </h2>

              {/* Expected Delivery */}
              {shipmentDetails.CurrentStatus.state !== "Delivered" &&
                shipmentDetails.CurrentStatus.state !== "Returned" && (
                  <p className="text-[14px] text-[#667085]">
                    {messages.shipmentMessages.expectedOn}
                    {createDateString(
                      shipmentDetails.PromisedDate,
                      lang,
                      "long"
                    )}
                  </p>
                )}

              {/* Share Link */}
              <div className="flex flex-col gap-4 mt-4 sm:flex-row ">
                {/* Copy Link Button */}
                <button
                  className="text-center px-2 h-[32px] leading-[32px] border rounded-md hover:bg-[#E30613] hover:text-white"
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast.success("Link copied to clipboard", {
                      richColors: true,
                    });
                  }}
                >
                  <CopyOutlined />
                </button>

                {/* WhatsApp Share Button */}
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center  px-2 h-[32px] leading-[32px] border rounded-md hover:bg-[#E30613] hover:text-white"
                >
                  <WhatsAppOutlined />
                </a>

                {/* Export PDF Button */}
                <ExportPDFButton shipmentDetails={shipmentDetails} />
              </div>
            </div>

            {/* Delivery Timeline */}
            {shipmentDetails.CurrentStatus.state !== "Returned" && (
              <div className="p-4 border-l border-r border-b border-[#E4E7EC] rounded-b-xl ">
                <Steps
                  size="small"
                  responsive
                  current={activeStepRef.current + 1}
                  status="wait"
                  labelPlacement="vertical"
                >
                  <Steps.Step
                    title={messages.shipmentSteps.shipmentCreated}
                    description={createDateString(
                      shipmentDetails.CreateDate,
                      lang,
                      "short"
                    )}
                    icon={greenCheck}
                  ></Steps.Step>
                  <Steps.Step
                    title={messages.shipmentSteps.pickedUp}
                    icon={
                      activeStepRef.current < 1 ? (
                        <Circle className="size-5" />
                      ) : (
                        greenCheck
                      )
                    }
                    disabled={activeStepRef.current < 1}
                    description={
                      activeStepRef.current === 1 &&
                      createDateString(
                        shipmentDetails.PromisedDate,
                        lang,
                        "short"
                      )
                    }
                  ></Steps.Step>
                  <Steps.Step
                    title={messages.shipmentSteps.processing}
                    icon={
                      activeStepRef.current < 2 ? (
                        <Circle className="size-5" />
                      ) : (
                        greenCheck
                      )
                    }
                    disabled={activeStepRef.current < 2}
                    description={
                      activeStepRef.current === 2 &&
                      createDateString(
                        shipmentDetails.PromisedDate,
                        lang,
                        "short"
                      )
                    }
                  ></Steps.Step>
                  <Steps.Step
                    icon={
                      activeStepRef.current < 3 ? (
                        <Circle className="size-5" />
                      ) : (
                        greenCheck
                      )
                    }
                    disabled={activeStepRef.current < 3}
                    title={messages.shipmentSteps.outForDelivery}
                    description={
                      activeStepRef.current === 3 &&
                      createDateString(
                        shipmentDetails.PromisedDate,
                        lang,
                        "short"
                      )
                    }
                  ></Steps.Step>
                  <Steps.Step
                    icon={
                      activeStepRef.current < 4 ? (
                        <Circle className="size-5" />
                      ) : (
                        greenCheck
                      )
                    }
                    disabled={activeStepRef.current < 4}
                    title={messages.shipmentSteps.delivered}
                    description={
                      activeStepRef.current === 4 &&
                      createDateString(
                        shipmentDetails.PromisedDate,
                        lang,
                        "short"
                      )
                    }
                  ></Steps.Step>
                </Steps>
              </div>
            )}
            {shipmentDetails.CurrentStatus.state !== "Delivered" &&
              shipmentDetails.CurrentStatus.state !== "Returned" && (
                <TrackingDetails
                  shipmentDetails={shipmentDetails}
                  messages={messages}
                  lang={lang}
                  groupedEvents={groupedEvents}
                />
              )}
          </div>
        </div>
      )}
    </>
  );
};

export default ShipmentDetails;
