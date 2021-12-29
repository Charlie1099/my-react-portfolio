import React, { useState } from "react";
// import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa"
import { useForm } from "react-hook-form"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Container, Row, Col, } from "react-bootstrap";

export default function Contact() {
    const { register, fromState: { error }, handleSubmit } = useForm()
    const [result, setResult] = useState("")
    const onSubmit = (data) => setResult(JSON.stringify(data))
    console.log(result)

    return(
        <Container>
            <section className="contact mb-5">
                <h1 className="text-center">This is how you can contact me</h1>
                <p className="text-center mx-auto">Id be happy to work Full time or paid internship</p>
                <hr/>

                <Row>
                    <Col md={9}>
                        <Form id="contact-form" onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Form.Group className="col-md-6 mt-3">
                                    <FloatingLabel controlId="FloatingLabel" label="Name">
                                    <Form.Control {...register("name", { required: true, maxLength : 20})} placeholder="Name" />
                                    {errors.name?.type ===  "required" && `*Required`}
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>
                        </Form>
                    </Col>
                </Row>

            </section>
        </Container>

    )

}