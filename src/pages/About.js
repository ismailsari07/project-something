import { getImageURL } from "../utils/image-util";
import {motion} from "framer-motion"

export default function About() {
    return (
        <motion.div
            initial={{opacity: 0, translateY: 30}}
            animate={{opacity: 1, translateY: 0}}
            className="w-[100%] flex h-fit  justify-between items-center"
        > 
            <div className="text-about w-[50%]">
                <h2 className="font-bold text-7xl mb-7">Connecting Turkey and Canada Through Construction</h2>
                <div className="text-lg">Our company strengthens trade ties between Turkey and Canada by trading construction materials and providing our customers with high-quality and reliable products. Additionally, we offer comprehensive construction services in the Greater Toronto Area (GTA) in Canada. These services include modern and durable residential construction, functional and aesthetic commercial projects, and value-adding renovation and remodeling work. With our team of experts, we complete every project with care and on time. Our goal is to meet our clients' needs fully and earn their trust through exceptional service and quality.</div>
            </div>
            <div className="image-about w-[40%]">
                <img src={getImageURL("/about-image.png")} alt="1" />
            </div>
        </motion.div>
    )
}