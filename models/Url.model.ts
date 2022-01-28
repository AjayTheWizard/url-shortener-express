import { Schema, model } from 'mongoose';
import { nanoid } from 'nanoid';

const UrlSchema = new Schema({
    fullPath: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        default: nanoid(8)
    },
    view: {
        type: Number,
        default: 0
    }
})

export const UrlModel = model("Urls", UrlSchema);
