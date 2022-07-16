import {useState, useEffect} from 'react';

function useDataFetching (datasource) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error,setError] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(datasource);
                const result = await data.json();

                if (result) {
                    setData(result);
                    setLoading(false)
                }

            } catch(e) {
                setLoading(false)
                setError(e.message)
            }
        }

        fetchData();
    }, [datasource]);

    return [loading, error, data];
}

export default useDataFetching;