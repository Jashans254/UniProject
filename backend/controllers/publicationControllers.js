import TryCatch from "../utils/TryCatch.js";
import { Publication} from "../models/publicationModel.js";

export const newPublication = TryCatch( async(req, res) =>{

    const {title , authors , journal , citedBy ,year} = req.body;

    const ownderId = req.user._id;

const publication  = await Publication.create({
    title,
    authors,
    journal,
    citedBy,
    year,
    owner:ownderId ,
})

res.status(201).json({
    message:"Publication created",
    publication,
})
})

export const deletePublication = TryCatch(async(req , res)=>{

    const publication = await Publication.findById(req.params.id);

    if(!publication){
        return res.status(404).json({
            message : "No publication with this id"
        })
    }

    if(publication.owner.toString() !== req.user._id.toString())
    {
        return res.status(403).json({
            message:"You are not authorized to delete this post"
        })
    }

    
    await publication.deleteOne();

    res.json({
        message : "Publication deleted"
    })

})