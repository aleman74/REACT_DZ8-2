import  {useState, useEffect, useRef} from 'react';

export default function useJsonFetch(url, opts) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const timestampRef = useRef();

    useEffect(() => {

        const fetchData = async() => {

            const timestamp = Date.now();
            timestampRef.current = timestamp;

            setLoading(true);

            try
            {
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                };

                const response = await fetch(url + opts, requestOptions);
                if (! response.ok) {
                    console.log('ERROR (timestamp = ' + timestampRef.current + '):  ' + response.statusText);

//                    throw new Error(response.statusText);
                    setError(response.statusText);
                    setData(null);
                }
                else {
                    if (timestampRef.current === timestamp) {
                        const value = await response.json();
                        setData(value);
                    }

                    setError('');
                }

            }
            catch(ex)
            {
                console.log('ERROR (timestamp = ' + timestampRef.current + '):  ' + ex);
                setError(ex);
            }
            finally
            {
                setLoading(false);
            }};

        fetchData();

    }, [url, opts]);      // deps = [] - функция выполнится один раз  (если undefined, то при каждой перерисовки)

    return [{data, loading, error}];
}