const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {

    },
    description: String,
    image: String,
    price: Number,
    location: String,
    country: String
});

const listing = mongoose.model("Listing", listingSchema);
modules.export = listing;