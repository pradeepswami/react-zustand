import { useSearchParams, useMatch } from "react-router-dom"
import { parseUrlParamTojson } from "./UrlParam";




export default function SearchForm() {
    const match = useMatch("/search");
    console.log("Match", match);
    const [searchParams] = useSearchParams();
    const searchData = parseUrlParamTojson(searchParams);
    if(searchData.name && searchData.place && searchData.locations) {
        return (
            <div>
                <h1>Search Results</h1>
                <ul>
                    {Object.keys(searchData).map(key => 
                    <li key={key}>{key} : {searchData[key]}</li>) 
                    }
                </ul>
            </div>
        )    
    }
    return (<>
    <h2>Select search param</h2>
    </>)

    
}