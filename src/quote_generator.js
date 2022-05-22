import {react, useState, useEffect} from "react";
import { buildUrl } from "./utilities";

const QuoteGenerator = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
        getAndSetQuote();
    }, []);

    const getAndSetQuote = () => {
        fetch(buildUrl("/quotes/single"))
        .then(response => response.json())
        .then(response => setQuote(response["quote"]));

    }
    
    return(
        <div>
            <p>{quote}</p>
        </div>
    )
}

export default QuoteGenerator; 