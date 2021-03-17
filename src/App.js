import { useEffect, useState } from "react";
import "./App.scss";
import "./Estates.scss";
import EstatesList from "./Components/EstatesList";
import EstateComparison from "./Components/EstateComparison";

function App() {
    const [estatesList, setEstatesList] = useState([]);
    const [oneEstate, setOneEstate] = useState(null);
    const [estateCompare, setEstateCompare] = useState(null);

    //console.log(oneEstate);

    async function fetchEstatesList() {
        const response = await fetch(
            "https://estate-comparison.codeboot.cz/list.php"
        );
        const estates = await response.json();
        setEstatesList(estates);
        // console.log(estates);
    }

    async function fetchEstate(id) {
        const response = await fetch(
            `https://estate-comparison.codeboot.cz/detail.php?id=${id}`
        );
        const estateDetail = await response.json();

        if (oneEstate) {
            setEstateCompare(estateDetail);
        } else setOneEstate(estateDetail);
    }

    useEffect(() => {
        fetchEstatesList();
    }, []);

    return (
        <div className="App">
            <header className="header">
                <h1 className="header__heading">Estate Comparison</h1>
            </header>
            <nav className="estates-list">
                {estatesList.slice(0, 10).map((estate, index) => (
                    <EstatesList
                        key={index}
                        estate={estate}
                        oneEstate={oneEstate}
                        setOneEstate={setOneEstate}
                        estateCompare={estateCompare}
                        setEstateCompare={setEstateCompare}
                        fetchEstate={fetchEstate}
                    />
                ))}
            </nav>
            {/* <button
                onClick={() => {
                    setEstateCompare(null);
                    setOneEstate(null);
                }}
            >
                Reset comparison
            </button> */}
            <div className="estate-compare">
                {estateCompare && oneEstate && (
                    <>
                        <EstateComparison
                            thisEstate={oneEstate}
                            otherEstate={estateCompare}
                        />
                        <EstateComparison
                            thisEstate={estateCompare}
                            otherEstate={oneEstate}
                        />
                    </>
                )}
            </div>
        </div>
    );
}

export default App;
