const util = require("util");
const gc = require("../config/upload-image");
const bucket = gc.bucket("garagemanager");

const { format } = util;

/**
 *
 * @param { File } object file object that will be uploaded
 * @description - This function does the following
 * - It uploads a file to the image bucket on Google Cloud
 * - It accepts an object as an argument with the
 *   "originalname" and "buffer" as keys
 */

const uploadImage = (file, jobID) =>
  new Promise((resolve, reject) => {
    const { originalname, buffer } = file;

    const blob = bucket.file(originalname.replace(/ /g, "_"));
    const name = `${jobID}${blob.name}`;
    console.log(bucket);
    const blobStream = blob.createWriteStream({
      resumable: false,
    });

    blobStream
      .on("finish", () => {
        const publicUrl = format(
          `https://storage.googleapis.com/${bucket.name}/${blob.name}`
        );
        resolve(publicUrl);
        console.log(jobID);
      })
      .on("error", (err) => {
        reject(`Unable to upload image, something went wrong`);
        console.log(err);
      })
      .end(buffer);
  });

module.exports = uploadImage;
