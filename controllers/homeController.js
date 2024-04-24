"use strict";

exports.showHome = (req, res) => {
    res.render("index");
}
exports.showContact = (req, res) => {
    res.render("contact");
};
exports.showTransport = (req, res) => {
    res.render("transportation");
};

exports.postedSignUp = (req, res) => {
    res.render("thanks");
};