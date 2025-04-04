import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: "ap-south-1",
    credentials: {
        accessKeyId: process.env.accessKeyId,
        secretAccessKey: process.env.secretAccessKey,

    }
})

async function GetObjectURL(key) {
    const command = new GetObjectCommand({
        Bucket: "poojandave-private",
        Key: key,
    })
    const url = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
    return url
}
async function init() {
    console.log("URL for obj1.png", await GetObjectURL("obj1.png"));
}

init()
