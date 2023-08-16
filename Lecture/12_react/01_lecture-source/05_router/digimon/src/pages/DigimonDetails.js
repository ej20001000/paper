import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { getDigimonDetails } from "../api/DigimonAPI";
import detailStyle from "./DigimonDetails.module.css";

function DigimonDetails() {
  const { id } = useParams();
  const [digimon, setDigimon] = useState({});
  const [digimonImage, setDigimonImage] = useState("");

  useEffect(() => {
    async function getList() {
      const fetchDigimon = await getDigimonDetails(id);

      setDigimon(fetchDigimon);
    }

    getList();
  }, []);

  return (
    <div className={detailStyle.details}>
      {digimon.images && (
        <>
            <img src={digimon.images[0].href} alt="" />
            <h3>id : {digimon.id}</h3>
            <h3>name : {digimon.name}</h3>
            <h3>{digimon.descriptions.map(desc => {
                if(desc.language == 'en_us') {
                    return desc.description;
                }
            })}</h3>
                {digimon.skills.map(skill => {
                    return(
                        <>
                                <h3>skill name: {skill.skill}</h3>
                                <h3>skill description: {skill.description}</h3>
                        </>
                    );
                })}
        </>
        )}
    </div>
  );
}

export default DigimonDetails;
