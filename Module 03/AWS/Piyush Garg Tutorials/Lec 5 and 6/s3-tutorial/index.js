import { S3Client, GetObjectCommand , PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3Client = new S3Client({
    region: process.env.AWS_REGION || "ap-south-1",
    credentials: {
        //nodejs access key id
        // accessKeyId: "AKIAU72LF4JRHZNVCU55",    
        // secretAccessKey: "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",
        //poojan-dave access key id
        accessKeyId: "AKIAU72LF4JRHE6QJFX7",
        secretAccessKey: "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",
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

async function PutObject(fileName, contentType) {
    const command = new PutObjectCommand({
        Bucket: "poojandave-private",
        Key: "uploads/user-uploads/" + fileName,
        ContentType: contentType,
    })
    const url = await getSignedUrl(s3Client, command)
    return url 
}

async function listObjects() {
    const command = new ListObjectsV2Command({
        Bucket: "poojandave-private",
        Prefix: "uploads/user-uploads/",
    })
    const response = await s3Client.send(command)
    console.log(response)
}

async function deleteObject(key) {
    const command = new DeleteObjectCommand({
        Bucket: "poojandave-private",
        Key: key,
    })
    const response = await s3Client.send(command)
}

async function init() {
    // Getting URL for obj1.png
    // console.log("URL for obj1.png", await GetObjectURL("obj1.png"));

    // Uploading file to S3
    // console.log("URL for uploaded file", await PutObject(`image-${Date.now()}.png`, "image/png"));

    // Getting URL for uploaded file
    // console.log("URL for viewing uploaded file", await GetObjectURL("uploads/user-uploads/image-1743759946677.png"));

    // Listing objects in S3
    // await listObjects()

    // Deleting object from S3
    await deleteObject("obj1.png")
    
}

init()
