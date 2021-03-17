import { useState } from "react";

function EstatesList(props) {
    function handleClick(e) {
        // let target = e.currentTarget;
        let value = e;
        if (props.oneEstate && props.estateCompare) {
            return;
        }
        props.fetchEstate(value);
    }
    const [selected, setSelected] = useState("");

    return (
        <div
            className={`list-estate ${selected && selected}`}
            onClick={() => {
                // estate.currentTarget.classList.toggle("selected");
                selected === "" ? setSelected("selected") : setSelected("");
                handleClick(props.estate.id);
            }}
        >
            <img
                className="list-estate__img"
                src={props.estate.images[0]}
                alt={props.estate.name}
            />
            <p className="list-estate__short-desc">
                {props.estate.name_extracted} {props.estate.locality}
            </p>
        </div>
    );
}

export default EstatesList;
