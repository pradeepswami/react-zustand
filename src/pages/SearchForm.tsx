import { useState } from "react";
import "./SearchForm.css"
import { useSearchParams } from 'react-router-dom';
import SearchResults from "./SearchResults";
import {parseUrlParamTojson} from './UrlParam';


type SearchFormProps = { name?: string, place?: string, locations?: string }





export default function SearchForm() {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    const [formData, setFormData] = useState<SearchFormProps>(parseUrlParamTojson(searchParams));

    const onSearch = function (formData: SearchFormProps) {
        console.log(formData);
        setSearchParams(formData);
    }

    
    return (
        <div className="SearchForm">
            <ul>
                <li>
                    <h3>Name</h3>
                    <input type="text" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/> 
                </li>
                <li>
                    <h3>Place</h3>
                    <input type="text" value={formData.place} onChange={(e) => setFormData({...formData, place: e.target.value})}/> 
                </li>
                <li>
                    <h3>Locations</h3>
                    <select value={formData.locations} onChange={(e) => setFormData({...formData, locations: e.target.value})}>
                        <option value="sg">SG</option>
                        <option value="in">IN</option>
                        <option value="us">US</option>
                    </select>
                </li>                
            </ul>
            <div> 
                <button onClick={() => onSearch(formData)}>Search</button>
            </div>
            <div>
                <SearchResults />
            </div>
        </div>
    )
}
