interface Address {
    label: string;
    countryCode: string;
    countryName: string;
    stateCode: string;
    state: string;
    county: string;
    city: string;
    district: string;
    street: string;
    postalCode: string;
    _id: string;
}

interface Position {
    lat: number;
    lng: number;
    _id: string;
}

interface ReturnCount {
    returnCountMay: number;
    returnCountJune: number;
    returnCountJuly: number;
    _id: string;
}

interface DepartureCount {
    departureCountMay: number;
    departureCountJune: number;
    departureCountJuly: number;
    _id: string;
}

interface Count {
    returnCount: ReturnCount;
    departureCount: DepartureCount;
    _id: string;
}

export interface Station {
    _id: string;
    station: string;
    address: {
        address: Address;
        position: Position;
        _id: string;
    };
    count: Count;
    __v: number;
}
