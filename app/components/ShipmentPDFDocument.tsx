// ShipmentPDFDocument.tsx
import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { ShipmentDetailsType } from "@/types/shipmentDetailsType"; // or wherever your types are

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 12,
    flexDirection: "column",
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  text: {
    fontSize: 12,
    marginVertical: 2,
  },
});

type ShipmentPDFDocumentProps = {
  shipment: ShipmentDetailsType;
};

const ShipmentPDFDocument: React.FC<ShipmentPDFDocumentProps> = ({
  shipment,
}) => {
  const {
    provider,
    CurrentStatus,
    PromisedDate,
    TrackingNumber,
    SupportPhoneNumbers,
    TransitEvents,
    CreateDate,
  } = shipment;

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Basic Info */}
        <View style={styles.section}>
          <Text style={styles.title}>Shipment Details</Text>
          {provider && <Text style={styles.text}>Provider: {provider}</Text>}
          {TrackingNumber && (
            <Text style={styles.text}>Tracking Number: {TrackingNumber}</Text>
          )}
          {CreateDate && (
            <Text style={styles.text}>Create Date: {CreateDate}</Text>
          )}
          {PromisedDate && (
            <Text style={styles.text}>Promised Date: {PromisedDate}</Text>
          )}
        </View>

        {/* Current Status */}
        <View style={styles.section}>
          <Text style={styles.text}>
            Current Status: {CurrentStatus.state} (Timestamp:{" "}
            {CurrentStatus.timestamp})
          </Text>
          {CurrentStatus.hub && (
            <Text style={styles.text}>Hub: {CurrentStatus.hub}</Text>
          )}
        </View>

        {/* Support Phone Numbers */}
        <View style={styles.section}>
          <Text style={styles.text}>Support Phone Numbers:</Text>
          {SupportPhoneNumbers &&
            SupportPhoneNumbers.map((phone, idx) => (
              <Text style={styles.text} key={idx}>
                - {phone}
              </Text>
            ))}
        </View>

        {/* Transit Events */}
        <View style={styles.section}>
          <Text style={styles.title}>Transit Events</Text>
          {TransitEvents &&
            TransitEvents.map((event, index) => (
              <View key={index}>
                <Text style={styles.text}>
                  {index + 1}. {event.state} ({event.timestamp})
                </Text>
                {event.hub && <Text style={styles.text}>Hub: {event.hub}</Text>}
                {event.exceptionCode && (
                  <Text style={styles.text}>
                    Exception Code: {event.exceptionCode}
                  </Text>
                )}
                {event.reason && (
                  <Text style={styles.text}>Reason: {event.reason}</Text>
                )}
              </View>
            ))}
        </View>
      </Page>
    </Document>
  );
};

export default ShipmentPDFDocument;
