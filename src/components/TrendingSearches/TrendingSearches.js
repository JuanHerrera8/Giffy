import React, { useState, useEffect} from "react";
import Category from "components/Category/Category";
import getTrendingTerms from "services/getTrendingTermsService";

export default function TrendingSearches() {
    const [trends, setTrends] = useState([])
    
    useEffect(() => {
        getTrendingTerms().then(setTrends)        
    }, [])

    return <Category name='Tendencias' options={trends} />
}