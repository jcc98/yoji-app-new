import React from 'react'

const KanjiGameOptions = () => {
    return (
        <div className="overflow-hidden h-screen p-5 flex justify-center content-center flex-col flex-wrap ">
            <div>
                <label >Select level</label>
                <select name="select-level" id="select-level" className="w-full rounded py-2">
                    <option value="5">５級</option>
                    <option value="4">４級</option>
                    <option value="3">３級</option>
                    <option value="jun2">準２級</option>
                    <option value="2">２級</option>
                    <option value="jun1">準１一級</option>
                    <option value="1">一級</option>
                    <option value="all">５級から一級まで</option>
                </select>
            </div>
            <div>
                <label>Select number of hidden moji</label>
                <select name="character-hide" id="character-hide" className="w-full rounded py-2">
                    <option value="1">One</option>
                    <option value="2">Two</option>
                </select>
            </div>
            <div>
                <button className="bg-white py-4 rounded shadow-md mt-3 w-full hover:bg-gray-100">Start</button>
            </div>
        </div>
    )
}

export default KanjiGameOptions
