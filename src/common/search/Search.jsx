

function Searchtask( { searchvalue, setSearchValue } ) { 

    return (
        <div className='search-task text-white text-xl'>
            <label>Search : </label>
            <input type="text" value={searchvalue} placeholder="Search task"  
                className="border-2 border-white rounded-lg p-1"/>
            <button className="ml-2 px-2 border-white border-2 rounded">Search</button>    
        </div>
    )
}

export default Searchtask
