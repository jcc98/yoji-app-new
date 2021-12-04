import React, { useState } from 'react'
import { workerData } from 'worker_threads'
import { yojiAll } from '../public/json/yojiAll'

const SearchYojiInput = () => {

    const [search, setSearch] = useState<string>("")

    return (
        <>
            <div className="text-center flex justify-center content-center mt-20">
                <input onChange={(e) => setSearch(e.target.value)} type="text" className="p-2 rounded shadow-md outline-none" placeholder="Search yoji..."></input>
            </div>
                {yojiAll.filter((obj) => {
                    if (search === "") {
                        return ""
                    } else if (obj.word.includes(search)) {
                        return obj 
                    }
                    }).map((objFiltered, key) => {
                        return (
                            <div className="text-lg text-center mt-4" key={key}>
                                {objFiltered.word}
                            </div>
                        )
                    })}
        </>
    )
}

export default SearchYojiInput
