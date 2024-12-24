export type DictionaryType = {
    hero: {
        title: string;
        description: string;
    };
    page: {
        title: string;
        description: string;
    };
    searchbar: {
        placeholder: string;
        modalMessage: string;
    };
    errorMessages: {
        invalidTrackingID: string;
        missingTrackingID: string;
    };
    shipmentMessages: {
        order: string;
        noID: string;
        Delivered: string;
        Returned: string;
        "Received at warehouse": string;
        "Out for delivery": string;
    };
};
