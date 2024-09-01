import Styles from "../components/SectionOne.module.css"
import {Link} from "react-router-dom"

import IconShanks from "../imgs/icon_shanks.jpg"
import IconLuffy from "../imgs/icon_luffy.jpg"
import IconTeach from "../imgs/icon_teach.jpg"
import IconBuggy from "../imgs/icon_buggy.webp"


function SectionFor(){
   return(
    
    <section className={Styles.sectionFor}>

        <aside>

          <div className={Styles.boximg}> 
               <Link  to={"/"}>
                 <img src={IconLuffy} alt="Icone do Luffy deus do sol" />
               </Link>
          </div>

          <div className={Styles.boximg}> 
                <Link to={"/Shanks"}>
                <img src={IconShanks} alt="Icone do Shanks Yonkou" />
                
                </Link>
          </div>

            <div className={Styles.boximg}> 
                <Link to={"/teach"}>
                <img src={IconTeach} alt="Icone do Teach Yonkou" />
                </Link>
            </div>

            <div className={Styles.boximg}> 
                <Link to={"/buggy"}>
                
                <img src={IconBuggy} alt="Icone do Buggy Yonkou" />
                </Link>
                
            </div>


        </aside>


     


     </section>
    
    
   )

}


export default SectionFor