import React, { Component } from "react";
import { Container, Row, Col, Carousel, Form, Button, Badge } from 'react-bootstrap';
import Dates from '../components/Date';
// import img1 from './jason-leung-AUAuEgUxg5Q-unsplash.jpg';
// import img2 from './victoria-shes-wSh0Exrb62g-unsplash.jpg';
import axios from 'axios';

class Foods extends Component {

    constructor() {
        super();
        let date_list = [];
        var today = new Date();
        this.state = {
            // dish_list: [{title:'food_1',image:img1},{title:"food_2",image:img2}],
            dish_list: [],
            // selected_diet: [],
            date_list: []
        }

        //itrate date and push to date_list array
        this.state.date_list.push(today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear())
        for (let index = 0; index < 5; index++) {
            today.setDate(today.getDate() + 1)
            let dc = today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
            this.state.date_list.push(dc)
        }
    }


    //call dish api
    componentDidMount() {
        axios.get("https://api.spoonacular.com/food/menuItems/search?apiKey=561755cebd92478eb287f7f34fac692f&query=burger&number=2")
            .then(responce => {
                this.setState({ dish_list: responce.data.menuItems });
                // var dish_list = responce.data.menuItems;
                // console.log("dishes: ",dish_list)
                // dish_list.forEach(element => {
                //     console.log("title: ",element.title)
                // });
            })
    }


    render() {

        return (
            <Container>
                <h3 className="text-center fw-bold mt-3">Choose your Dishes</h3>
                <div className="mb-4" style={{ backgroundColor: "#feee00", width: "150px", height: "4px", margin: "0 auto" }}></div>
                <div style={{ color: "rgb(64, 69, 83)" }} className="text-center mb-3">As per your recomented calorie, choose your dishes from below</div>
                {/* <div>{this.state.dish_list.map((itm, k) => {
                    return (
                        <p>{itm.title}</p>
                    )
                })}</div> */}
                <Row>
                    {/* list dates */}
                    <Col className="mt-4" lg={2}>{this.state.date_list.map((date, key) => {
                        return (
                            <Form.Check aria-label="option 1" label={date} />
                        )
                    })}
                        <Badge style={{ width: "100px" }} className="mt-3 text-wrap" bg="success">Select Custom Dates</Badge>
                    </Col>

                    <Col lg={10}>
                        <Row>

                            {/* Breakfast */}
                            <Col>
                                <div className="text-center text-secondary mb-2">Break Fast</div>

                                <Carousel interval={null} controls={false} fade>{this.state.dish_list.map((itm, k) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={itm.image}
                                                alt="First slide"
                                                width={180}
                                                height={200}
                                                fluid
                                            />{console.log("itm ")}
                                            <Carousel.Caption>
                                                <p>{itm.title}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )

                                })}</Carousel>
                            </Col>

                            {/* Lunch */}
                            <Col>
                                <div className="text-center text-secondary mb-2">Lunch</div>
                                <Carousel interval={null} controls={false} fade>{this.state.dish_list.map((itm, k) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={itm.image}
                                                alt="First slide"
                                                width={180}
                                                height={200}
                                                fluid
                                            />
                                            <Carousel.Caption>
                                                <p>{itm.title}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )

                                })}</Carousel>
                            </Col>

                            {/* Evening Meal */}
                            <Col>
                                <div className="text-center text-secondary mb-2">Evening Meal</div>
                                <Carousel interval={null} controls={false} fade>{this.state.dish_list.map((itm, k) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={itm.image}
                                                alt="First slide"
                                                width={180}
                                                height={200}
                                                fluid
                                            />
                                            <Carousel.Caption>
                                                <p>{itm.title}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )

                                })}</Carousel>
                            </Col>

                            {/* Supper */}
                            <Col>
                                <div className="text-center text-secondary mb-2">Supper</div>
                                <Carousel interval={null} controls={false} fade>{this.state.dish_list.map((itm, k) => {
                                    return (
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100 rounded"
                                                src={itm.image}
                                                alt="First slide"
                                                width={180}
                                                height={200}
                                                fluid
                                            />
                                            <Carousel.Caption>
                                                <p>{itm.title}</p>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    )

                                })}</Carousel>
                            </Col>

                            {/* Submit */}
                            <Col className="d-flex justify-content-center mt-5" lg={12} md={12}>
                                <Button style={{ width: "150px" }} size="sm" variant="success" className="rounded-pill">Proceed</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default Foods;