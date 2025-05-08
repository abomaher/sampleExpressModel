import mongoose, { Schema, ObjectId, Document } from "mongoose";

const AutoIncrement = require('mongoose-sequence')(mongoose);

const OfferStatusEnum = ['active', 'trash'];

const OfferPaytStatusEnum = ['notDone', 'done'];

export interface IOfferImage {
    url: any;
    data: string;
    contentType: string;
}

export interface IOffer extends Document{
    offerType: string;
    offerRealStateType:  string;
    offerRealStateTypeOther:  string;
    offerRealStatCategory: string,
    size: string;
    price:  string;
    age: string;
    offerText: string;
    city: string;
    district: string;
    romesCount: string;
    livingRomesCount: string;
    bathromCount: string;
    howOffering: string;
    tarkesNumber: string;
    offerManName: string;
    offerManMobile: string;
    locationUrl: string;
    images: IOfferImage[];
    video: string;
    userId: ObjectId | string;
    status: "active" | "trash";
    payStatus: "notDone" | "done";
    trashReason: string;
    idNumber: number;
    addDate: Date;
}

const OfferImageSchema = new Schema<IOfferImage>({
    url: {type: String, required: true},
    data: {type: String, required: false},
    contentType: {type: String, required: false},
});

const OfferSchema = new Schema<IOffer>({
    images: [OfferImageSchema],
    offerType: { type: String, required: true },
    offerRealStateType: { type: String, required: true },
    offerRealStateTypeOther: { type: String, required: false },
    offerRealStatCategory: { type: String, required: true },
    size: { type: String, required: true },
    price:  { type: String, required: true },
    age: { type: String, required: false },
    offerText: { type: String, required: true },
    city: { type: String, required: true },
    district: { type: String, required: true },
    romesCount: { type: String, required: false },
    livingRomesCount: { type: String, required: false },
    bathromCount: { type: String, required: false },
    howOffering: { type: String, required: false },
    tarkesNumber: { type: String, required: false },
    offerManName: { type: String, required: false },
    offerManMobile: { type: String, required: false },
    locationUrl: { type: String, required: false },
    video: { type: String, required: false },
    userId: { type: String, required: true },
    status: { type: String, enum: OfferStatusEnum, default: "active" },
    payStatus: { type: String, enum: OfferPaytStatusEnum, default: "notDone" },
    trashReason: { type: String, required: false },
    addDate: { type: Date, default: Date.now() }
});
OfferSchema.plugin(AutoIncrement, {inc_field: 'idNumber'});


export const offerModel = mongoose.model<IOffer>("Offer", OfferSchema);