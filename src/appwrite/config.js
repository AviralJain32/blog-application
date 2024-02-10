import conf from "../conf/conf";
import { Client,ID,Databases,Storage,Query } from "appwrite";

export class Service{
    Client =new Client();
    databases;
    bucket;

    constructor(){
        this.Client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectID);
        this.databases=new Databases(this.Client);
        this.bucket=new Storage(this.Client);
    }
    async createPost({title,slug,content,featuredImage,status,userid}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userid
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error);

        }
    }
    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error",error);
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error",error);
            return false;
            
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error",error);
        }
        return false
    }

    async getPostByID(userid){
        try{
            console.log(userid);
            const mytable=await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [
                    Query.equal("userid", userid),

                ]
            )
            console.log(mytable);
            return mytable;
        }
        catch(error){
            console.log("Appwrite service :: getPostbyID :: error",error);
        }
    }
    //indexes banana in appright is mandatory to make getPosts fuctionality
    async getPosts(queries){
        try {
            const posts=await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                [Query.equal("status", "active")]
            )
            console.log(posts);
            return posts;
        } catch (error) {
            console.log("Appwrite serivce :: getPosts :: error", error);
            return false
        }
    }

    //file upload service
    async uploadFile(file){
        try{
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file
            )
        }
        catch(err){
            console.log("Appwrite service :: uploadFile :: error",err);
            return false;
        }
    }
    async deleteFile(FileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketID,
                FileID
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error",error);
        }
    }
    getFilePreview(fileid){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileid
        )
    }
}

const service=new Service()
export default service