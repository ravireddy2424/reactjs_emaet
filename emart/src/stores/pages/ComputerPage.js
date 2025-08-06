import React from 'react'
import {computerData } from "../data/computers"


const ComputerPage = () => {
    return (
        <>
            <div className="pageSection">
                {
                    computerData.map((i) => {
                        return (
                            <div>
                                <div className="pageImg">
                                    <img src={i.image} alt="" />
                                </div>
                                <div>
                                    {i.company},{i.model }
                                </div>
                            </div>

                        )
                    })

                }

                
                
            </div>
        
        </>
    )
}
export default ComputerPage