// IMPORTS
import { useEffect, useState } from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'

// MAIN REACT COMPONENT
function App(){
    let [search, setSearch] = useState('')
    let [message, setMessage] = useState('Search for Music!')
    let [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            document.title = `${search} Music`
            const response = await fetch('https://itunes.apple.com/search?term=the%20grateful%20dead')
            const resData = await response.json()
            if (resData.results.lenght > 0) {
                setData(resData.results)
            } else {
                setMessage('Not Found')
            }
        }
        fetchData()
    }, [search])

    return (
        <div>
            <SearchBar />
            {message}
            <Gallery />
        </div>
    )
}
// Lines 8-10 uses "useState" hook to set initial values 
//  these values (state) is preserved for re-renders of the page.
//  "useState" returns a pair: the current state value and a function that lets you update the state (ex= [search, setSearch])
//  Note that if updated it does not merge the old and new states.  State is replaced.  If you need to add to current state 
//  you will need to include both current state and new state values (it is not a append, it is a replace).
// Lines 12-24 uses "useEffect" hook to set-up a fetch
// Line 24 contains a dependency that only allow to search to execute if the value of search is updated.



// EXPORT, DUH
export default App

