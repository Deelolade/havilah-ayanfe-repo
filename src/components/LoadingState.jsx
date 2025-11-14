import axios from "axios";
import React, { useEffect, useState } from "react";

const LoadingState = () => {
    const [facts, setFacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)

    const fetchCatFacts = async () => {
        try {
            setLoading(true);
            const res = await axios.get("https://catfact.ninja/facts");
            setFacts(res.data.data);
            setLoading(false);
        } catch (error) {
            console.log(error.message)
            setError(true)
            setLoading(false)
        }
    };
    useEffect(() => {
        fetchCatFacts();
    }, []);
    return (
        <div>
            {
                error && (
                    <p className="text-red-500">Error loading from endpoint...</p>
                )}
            {loading ? (
                <p>loading...</p>
            ) : (
                <div className="">
                    {facts.map((fact, idx) => {
                        return (
                            <div key={idx}>
                                <p>{fact.fact}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default LoadingState;
