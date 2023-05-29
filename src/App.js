import { useSearchParams } from "react-router-dom";
import './App.css';

const COMMAND = {
    g: {
        name: "Google",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    },
    fb: {
        name: "Facebook",
        url: "https://facebook.com/",
        searchurl: "https://www.facebook.com/search/top/?q="
    },
    DEFAULT: {
        name: "Default - Google Search",
        url: "https://google.com/",
        searchurl: "https://www.google.com/search?q="
    }
}

function App() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')
    if (search !== null) {
        const tokens = search.split(' ')
        if (tokens.length > 0) {
            const command = tokens[0]
            if (command in COMMAND) {
                let url = COMMAND[command]['url']
                if (tokens.length > 1) {
                    const query = tokens.slice(1)
                    url = COMMAND[command]['searchurl'] + query.join(" ")
                }
                window.location.replace(url)
            } else {
                window.location.replace(COMMAND['DEFAULT']['searchurl'] + search)
            }
        }
    }
    return (
        <div>
        </div>
    );
}

export default App;
