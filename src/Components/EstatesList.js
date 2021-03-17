import { useState } from "react";

function EstatesList(props) {
    const [selected, setSelected] = useState("");

    function handleClick(e) {
        let value = e;
        if (props.oneEstate && props.estateCompare) {
            return;
        }
        props.fetchEstate(value);
    }

    return (
        <div
            className={`list-estate ${selected && selected}`}
            onClick={() => {
                handleClick(props.estate.id);

                if (props.oneEstate && props.estateCompare) {
                    return;
                }
                selected === "" ? setSelected("selected") : setSelected("");
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
