import React, { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import sun from "../img/sun.png"
import cloud from "../img/cloud.png"
import rain from "../img/rain.webp"
import snow from "../img/snow.webp"
import WCitySelect from "./wCitySelect"

const WCityCard = ({ cityWeather, city, cityy, setCityy }) => {

    const [temp, setTemp] = useState([])

    useEffect(() => {
        setTemp(cityWeather)
    }, [cityWeather])

    function setIcon(serverIcon) {
        switch (serverIcon) {
            case "partly-cloudy-day":
                return cloud
            case "rain":
                return rain
            case "partly-cloudy-day":
                return cloud
            case "clear-dayy":
                return sun
            case "snow":
                return snow
            default:
                return sun
        }
    }

    return (
        <Container className="my-3 justify-content-center text-white br-1 mx-auto bg-dark">
            <Row>
                <Col xs="6" sm="6" md="12" lg="12" xl="12" xxl="12" className="my-2 py-1">
                    <div>
                        <h3 className="py-2 text-center">5-day forecast for {cityy}</h3>
                        <WCitySelect cityy={cityy} setCityy={setCityy} />
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-center">
                {
                    cityWeather.length >= 1 ? (
                        cityWeather.slice(0, 5).map((day, index) => {
                            return (
                                <Row key={index} className="justify-content-center">
                                    {/* Date */}
                                    <Col xs="4" sm="4" md="4" lg="4" xl="2" xxl="2" className="my-2 py-1 border">
                                        <h3 className="py-2 text-center">{cityWeather[index].datetime}</h3>
                                    </Col>

                                    {/* Current */}
                                    <Col xs="4" sm="4" md="4" lg="4" xl="3" xxl="3" className="my-2 pt-3 border justify-content-between text-center">
                                        <h5 className="text-center me-3">Humidity: {cityWeather[index].humidity}</h5>
                                        <h5 className="text-center me-3">Wind speed: {cityWeather[index].windspeed}</h5>
                                        <h5 className="text-center me-3">Preciptype: {cityWeather[index].preciptype}</h5>
                                    </Col>

                                    <Col xs="4" sm="4" md="4" lg="4" xl="3" xxl="3" className="my-2 pt-3 border justify-content-between text-center">
                                        <p className="d-inline fw-bold me-3">{cityWeather[index].conditions}</p>
                                        <img src={setIcon(cityWeather[index].icon)} alt={cityWeather[index].conditions} className="w-25" />
                                        <h5 className="text-center">
                                            High: {(((cityWeather[index].tempmax - 32) * 5) / 9).toFixed(2)} /
                                            Low: {(((cityWeather[index].tempmin - 32) * 5) / 9).toFixed(2)}
                                        </h5>
                                    </Col>
                                </Row>
                            )
                        })
                    ) : <h2>Weather information is not available for this city</h2>
                }
            </Row >
        </Container >
    )
}

export default WCityCard