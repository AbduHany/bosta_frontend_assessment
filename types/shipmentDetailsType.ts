export type TransitEvent = {
    state: string;
    timestamp: string;
    hub?: string;
    exceptionCode?: string;
    reason?: string;
};

export type ShipmentDetailsType = {
    provider: string;
    CurrentStatus: {
        state: string;
        timestamp: string;
        hub: string;
    };
    PromisedDate: string;
    TrackingNumber: string;
    TrackingURL: string;
    SupportPhoneNumbers: string[];
    TransitEvents: TransitEvent[];
    CreateDate: string;
    isEditableShipment: boolean;
    exceptionCode?: number;
    nextWorkingDay?: {
        dayDate: string;
        dayName: string;
    }[];
    isOnlinePaymentFeatureEnabled: boolean;
};
