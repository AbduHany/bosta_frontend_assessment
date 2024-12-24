import { createDateString } from "@/helpers/helperFunctions";
import { DictionaryType } from "@/types/dictionaryType";
import { ShipmentDetailsType, TransitEvent } from "@/types/shipmentDetailsType";
import { Steps } from "antd";
import React from "react";

const TrackingDetails = ({
  //   shipmentDetails,
  messages,
  lang,
  groupedEvents,
}: {
  shipmentDetails: ShipmentDetailsType;
  messages: DictionaryType;
  lang: string;
  groupedEvents: Record<string, TransitEvent[]>;
}) => {
  console.log(groupedEvents);
  return (
    <div className="mt-4 flex flex-col mb-10">
      <h1 dir={lang === "en" ? "ltr" : "rtl"}>
        {messages.trackingDetails.title}
      </h1>
      <Steps direction="vertical" progressDot className="">
        {groupedEvents &&
          Object.keys(groupedEvents)
            .reverse()
            .map((key) => {
              const events = groupedEvents[key];
              return (
                <Steps.Step
                  key={key}
                  subTitle={createDateString(key, lang, "short")}
                  description={
                    <div className="flex flex-col gap-3">
                      {events
                        .slice()
                        .reverse()
                        .map((event, i) => {
                          return (
                            <div
                              key={i}
                              className="flex flex-col px-4 py-2 border border-[#E4E7EC] rounded-md"
                            >
                              <h3 className="text-[14px]">{event.state}</h3>
                              <div className="flex text-[#667085]">
                                <p>
                                  {new Date(event.timestamp).toLocaleTimeString(
                                    lang,
                                    { hour: "2-digit", minute: "2-digit" }
                                  )}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  }
                />
              );
            })}
        <Steps.Step style={{ display: "none" }} />
      </Steps>
    </div>
  );
};

export default TrackingDetails;
