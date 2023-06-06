import COMMANDS from './Commands'
import './styles.css'
import { useState } from 'react'
import logo from './rabbit.png'

const Help = () => {
    const [search, setSearch] = useState('')

    const parseCommands = () => {
        const list = Object.keys(COMMANDS).map(key => {
            const val = COMMANDS[key]
            return {
                command: key,
                name: val['name'],
                url: val['url'],
                searchUrl: val['searchurl']
            }
        })
        if (search === '') {
            return list
        } else {
            return list.filter(cmd => cmd['command'].includes(search))
        }
    }
    return (
        <div>
            <div className='navbar'>
                <img className='icon' src={logo} alt='logo'/>
                <h3 className='inline'>bunnylol</h3>
            </div>
            <div className='container'>

                <div className='card'>
                    <input placeholder='Search command' value={search} onChange={e => setSearch(e.target.value)}/>
                </div>
                <div className='card'>
                    <h3 className='card-title'>List of Commands</h3>
                    <table>
                        <tr>
                            <th>Command</th>
                            <th>Name</th>
                            <th>URL</th>
                            <th>Search URL</th>
                        </tr>

                        {parseCommands().map((item, index) => (
                            <tr key={index}>
                                <td>{item['command']}</td>
                                <td>{item['name']}</td>
                                <td>{item['url']}</td>
                                <td>{item['searchUrl']}</td>
                            </tr>
                        ))}

                    </table>
                </div>
            </div>
        </div>

    )
}

export default Help