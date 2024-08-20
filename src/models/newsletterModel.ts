import { Schema, model, models } from "mongoose";

const newsletterSchema = new Schema(
    {
        mail: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
    },
    { timestamps: true }
);

const NewsletterModel = models.Newsletter || model("Newsletter", newsletterSchema);

export default NewsletterModel;
