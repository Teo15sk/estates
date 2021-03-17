function EstateComparison(props) {
    const { thisEstate, otherEstate } = props;

    let priceCompare =
        Number(thisEstate.prize_czk) < Number(otherEstate.prize_czk)
            ? "better"
            : "worse";
    let floorAreaCompare =
        Number(thisEstate.building_area) > Number(otherEstate.building_area)
            ? "better"
            : "worse";
    let landAreaCompare =
        Number(thisEstate.land_area) > Number(otherEstate.land_area)
            ? "better"
            : "worse";

    return (
        <div className="estate">
            <img
                src={thisEstate.images && thisEstate.images[0]}
                alt={thisEstate.id}
            />
            <div>{thisEstate.name}</div>
            <div
                className={`estate__row estate__price estate__price--${priceCompare}`}
            >
                <span>Price</span>
                <span>
                    {thisEstate.prize_czk &&
                        thisEstate.prize_czk.toLocaleString()}{" "}
                    Kč
                </span>
            </div>
            <div className="estate__row estate__locality">
                <span>Locality</span>
                <span>{thisEstate.locality && thisEstate.locality}</span>
            </div>
            <div
                className={`estate__row estate__floor-area estate__floor-area--${floorAreaCompare}`}
            >
                <span>Floor Area</span>
                <span>
                    {thisEstate.building_area &&
                        thisEstate.building_area.toLocaleString()}{" "}
                    m&sup2;
                </span>
            </div>
            <div
                className={`estate__row estate__land-area estate__land-area--${landAreaCompare}`}
            >
                <span>Land Area</span>
                <span>
                    {thisEstate.land_area &&
                        thisEstate.land_area.toLocaleString()}{" "}
                    m&sup2;
                </span>
            </div>
            <div className="estate__company">
                <img
                    src={thisEstate.company_logo && thisEstate.company_logo}
                    alt=""
                />{" "}
                <span>
                    {thisEstate.company_name && thisEstate.company_name}
                </span>
            </div>
        </div>
    );
}

export default EstateComparison;
