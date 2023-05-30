import { useSearchParams } from "react-router-dom";
import COMMANDS from './Commands'

function App() {
    const [searchParams] = useSearchParams();
    const search = searchParams.get('search')
    if (search !== null) {
        const tokens = search.split(' ')
        if (tokens.length > 0) {
            const command = tokens[0]
            if (command in COMMANDS) {
                let url = COMMANDS[command]['url']
                if ('searchurl' in COMMANDS[command] && tokens.length > 1) {
                    const query = tokens.slice(1)
                    url = COMMANDS[command]['searchurl'] + query.join(" ")
                }
                window.location.replace(url)
            } else {
                window.location.replace(COMMANDS['DEFAULT']['searchurl'] + search)
            }
        }
    }
    return <div/>;
}

export default App;
