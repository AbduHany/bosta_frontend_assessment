const response = {
    provider: "Bosta",
    PromisedDate: "2020-07-22T19:07:50.883Z",
    TrackingNumber: "1094442",
    TrackingURL: "bosta.co/tracking-shipment/?track_num=1094442",
    SupportPhoneNumbers: ["19043"],
    CreateDate: "2020-07-21T17:37:31.147Z",
    isEditableShipment: false,
    nextWorkingDay: [{ dayDate: "2020-07-23", dayName: "Thrusday" }],
    isOnlinePaymentFeatureEnabled: false,
};

const response2 = {
    "provider": "Bosta",
    "CurrentStatus": {
        "state": "PACKAGE_RECEIVED",
        "timestamp": "2024-08-07T16:20:13.758Z",
        "hub": "DSP Test Hub"
    },
    "PromisedDate": "2024-08-08T00:00:00.000Z",
    "TrackingNumber": "36406704",
    "TrackingURL": "bosta.co/tracking-shipment/?track_num=36406704",
    "SupportPhoneNumbers": [
        "19043"
    ],
    "TransitEvents": [
        {
            "state": "TICKET_CREATED",
            "timestamp": "2024-08-07T14:52:29.952Z"
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-08-07T14:52:32.516Z",
            "hub": "DSP Test Hub"
        },
        {
            "state": "NOT_YET_SHIPPED",
            "timestamp": "2024-08-07T14:55:39.149Z"
        },
        {
            "state": "OUT_FOR_DELIVERY",
            "timestamp": "2024-08-07T15:38:10.968Z"
        },
        {
            "state": "WAITING_FOR_CUSTOMER_ACTION",
            "exceptionCode": "7",
            "timestamp": "2024-08-07T16:19:51.972Z",
            "reason": "Customer is not answering."
        },
        {
            "state": "PACKAGE_RECEIVED",
            "timestamp": "2024-08-07T16:20:13.758Z",
            "hub": "DSP Test Hub"
        }
    ],
    "CreateDate": "2024-08-07T14:22:48.732Z",
    "isEditableShipment": true,
    "exceptionCode": 7,
    "nextWorkingDay": [
        {
            "dayDate": "2024-08-10",
            "dayName": "Saturday"
        }
    ],
    "isOnlinePaymentFeatureEnabled": false
}

const response3 = {
    "provider": "Bosta",
    "Type": "SEND",
    "ScheduleDate": "2022-11-28T21:59:59.999Z",
    "CurrentStatus": {
        "state": "Delivered",
        "code": 45,
        "timestamp": "2022-11-28T20:07:25.565Z"
    },
    "TrackingNumber": "78260098",
    "CreateDate": "2022-11-27T08:53:26.869Z",
    "DropOffAddress": {
        "country": {
            "_id": "60e4482c7cb7d4bc4849c4d5",
            "name": "Egypt",
            "code": "EG"
        },
        "city": {
            "_id": "FceDyHXwpSYYF9zGW",
            "name": "Cairo",
            "sector": 1,
            "nameAr": "القاهرة"
        },
        "zone": {
            "_id": "0uqg4ONS-T",
            "name": "Masr ElGedida",
            "nameAr": "مصر الجديده"
        },
        "district": {
            "_id": "EQ0ujIHzuWJ",
            "name": "Masr ElGedida",
            "nameAr": "مصر الجديده"
        },
        "firstLine": "٩ شارع الطحاوي مصر الجديدة متفرع من الخليفة المأمون و الميرغني فوق مطعن سبيكترا و جنب سوبر ماركت النيل شقة ٩٠٣ - الدور العاشر شقه اخر الممر",
        "geoLocation": [
            31.3127159,
            30.0893253
        ]
    },
    "PromisedDate": "2022-11-28T21:59:59.999Z",
    "isEditableShipment": false,
    "nextWorkingDay": [
        {
            "dayDate": "2022-11-29",
            "dayName": "Tuesday"
        }
    ],
    "collectedFromBusiness": "2022-11-27T12:52:14.035Z",
    "canRequestPOSMachine": false,
    "deliveryCountryCode": "EG",
    "canPayOnline": false,
    "isOnlinePaymentFeatureEnabled": false
}

export { response, response2, response3 };