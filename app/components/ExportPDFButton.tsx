import React from "react";
import { FilePdfOutlined } from "@ant-design/icons";
import { toast } from "sonner";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

// Import your React PDF document component that expects your shipment data
import ShipmentPDFDocument from "./ShipmentPDFDocument";
// Import or define your shipment data + types
import { ShipmentDetailsType } from "@/types/shipmentDetailsType";

const ExportPDFButton = ({
  shipmentDetails,
}: {
  shipmentDetails: ShipmentDetailsType;
}) => {
  const handleExportPDF = async () => {
    try {
      // Optional: Show a toast informing user the PDF is generating
      toast.loading("Generating PDF...", { richColors: true });

      // Generate the PDF blob from your React PDF document
      const blob = await pdf(
        <ShipmentPDFDocument shipment={shipmentDetails} />
      ).toBlob();

      // Trigger browser download
      saveAs(blob, `details_order_${shipmentDetails.TrackingNumber}.pdf`);

      // Show a success toast
      toast.dismiss();
      toast.success("Shipment details exported to PDF", { richColors: true });
    } catch (error) {
      // Show an error toast
      toast.dismiss();
      console.error("Error generating PDF:", error);
      toast.error("Failed to export PDF", { richColors: true });
    }
  };

  return (
    <button
      className="px-2 h-[32px] leading-[32px] border rounded-md hover:bg-[#E30613] hover:text-white"
      onClick={handleExportPDF}
    >
      <FilePdfOutlined />
    </button>
  );
};

export default ExportPDFButton;
