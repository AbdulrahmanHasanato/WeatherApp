import React, { useState } from "react"
import { Dropdown } from "react-bootstrap"

const WCitySelect = (cityy) => {

    const locations = ["Gaziantep,Turkey", "Istanbul,Turkey", "London,UK", "NewYork, US", "Maka,SaudiArabia"]

    return (
        <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Select city
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {
                    locations.length >= 1 ? (
                        locations.map((location, index) => {
                            return (
                                <Dropdown.Item key={index} onClick={() => cityy.setCityy(location)} href={`#/${index}`}>{location}</Dropdown.Item>
                            )
                        })
                    ) :
                        <Dropdown.Item href="#/action-1">Gaziantep,Turkey</Dropdown.Item>
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default WCitySelect