import React, {useState} from 'react';

function UrlTester() {
    const [url, updateUrl] = useState("https://breadsheet.wl.r.appspot.com");
    const [endpoint, updateEndpoint] = useState("/api/v1/readme");
    const [results, updateResults] = useState("");
    // let random = Math.random().toString(36).substring(6);
    // console.log("Random:", random);

    function handleChange(event) {
        if (event.target.name === "url") {
            updateUrl(event.target.value);
        } else if (event.target.name === "endpoint") {
            updateEndpoint(event.target.value)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Clicked the button!");
        console.log("Request: GET", url + endpoint);

        // Make fetch happen
        fetch(url + endpoint)
            .then(response => response.json())
            .then(result => {
                updateResults(result.data)
                console.log("Results:", result.data);
            })
            .catch(error => {
                updateResults(error.toString());
                console.log("Error retrieving data for all recipes:", error)
            });
    }

    return (
        <div className="url-tester-container">
            <form className="url-tester-controls component">
                <h1>Test Backend URL</h1>

                <span className="input-group">
                    <label htmlFor={"url"}>URL:</label>
                    <input type="text"
                           id="url"
                           name="url"
                           value={url}
                           onChange={handleChange}/>
                </span>

                <span className="input-group">
                    <label htmlFor={"endpoint"}>Endpoint:</label>
                    <input type="text"
                           id="endpoint"
                           name="endpoint"
                           value={endpoint}
                           onChange={handleChange}/>
                </span>

                <button type="submit"
                        className="btn btn-test"
                        name="Test"
                        id="btn-test"
                        onClick={handleSubmit}>
                    Test
                </button>
            </form>

            <div className="url-tester-results component">
                <h2>Results</h2>
                <p className="results-container">
                    {JSON.stringify(results)}
                </p>
            </div>

        </div>
    )
}

export default UrlTester;
