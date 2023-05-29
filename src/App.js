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
    wa: {
        name: "WhatsApp Web",
        url: "https://web.whatsapp.com/"
    },
    gm: {
        name: "Gmail",
        url: "https://mail.google.com/mail/u/0",
        searchurl: "https://mail.google.com/mail/u/"
    },
    gd: {
        name: "Google Drive",
        url: "https://drive.google.com/drive/u/0",
        searchurl: "https://drive.google.com/drive/u/"
    },
    yt: {
        name: "YouTube",
        url: "https://youtube.com/",
        searchurl: "https://www.youtube.com/results?search_query="
    },
    gh: {
        name: "GitHub",
        url: "https://github.com/",
        searchurl: "https://www.github.com/search?q="
    },
    l: {
        name: "Linkedin",
        url: "https://linkedin.com/",
    },
    ig: {
        name: "Instagram",
        url: "https://instagram.com/",
        searchurl: "https://instagram.com/"
    },
    n: {
        name: "Netflix",
        url: "https://netflix.com/",
        searchurl: "https://www.netflix.com/search?q="
    },
    cal: {
        name: "Google Calendar",
        url: "https://calendar.google.com/calendar/r"
    },
    cineb: {
        name: 'cineb.net',
        url: 'https://cineb.net/',
        searchurl: 'https://cineb.net/search/'
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
