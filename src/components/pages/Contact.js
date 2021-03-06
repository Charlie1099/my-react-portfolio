import React, { useState } from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa"
import { useForm } from "react-hook-form"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import { Container, Row, Col } from "react-bootstrap";

export default function Contact() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [result, setResult] = useState('');
    const onSubmit = (data) => setResult(JSON.stringify(data));
    console.log(result);

    return (
        <Container>
            <section className="contact mb-5">
                <h1 className="text-center">This is how you can contact me</h1>
                <p className="text-center mx-auto">Id be happy to work Full time or internship</p>
                <hr />

                <Row>
                    <Col md={9}>
                        <Form id='contact-form' onSubmit={handleSubmit(onSubmit)}>

                            <Row>
                                <Form.Group className='col-md-6 mt-3'>
                                    <FloatingLabel controlId='floatingInput' label='Name'>
                                        <Form.Control {...register('name', { required: true, maxLength: 30 })} placeholder='Name' />
                                        {errors.name?.type === 'required' && `*Required`}
                                    </FloatingLabel>
                                </Form.Group>
                                <Form.Group className='col-md-6 mt-3'>
                                    <FloatingLabel controlId='floatingInput' label='Email'>
                                        <Form.Control {...register('email')} placeholder='Email' />
                                        {errors.email?.type === 'required' && `*Required`}
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className='col-md-12 mt-3'>
                                    <FloatingLabel controlId='floatingInput' label='Subject'>
                                        <Form.Control {...register('subject', { required: true, maxLength: 30 })} placeholder='Subject' />
                                        {errors.subject?.type === 'required' && `*Required`}
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className='col-md-12 mt-3'>
                                    <FloatingLabel controlId='floatingInput' label='Message'>
                                        <Form.Control as='textarea' style={{ height: '100px' }} {...register('message', { required: true, maxLength: 263 })} placeholder='Message' />
                                        {errors.message?.type === 'required' && `*Required`}
                                    </FloatingLabel>
                                </Form.Group>
                            </Row>

                            <p>DEV NOTE: This app is not connected to a back-end server, so messages cannot be transmitted via this form.</p>
                            {/* <p>{result}</p> */}
                            <Button variant='primary' type='submit'>Send</Button>
                        </Form>
                    </Col>

                    <Col md={3} className='mt-2 text-center'>
                        <ul className='list-unstyled mb-0'>
                            <li className='cmb-fa-nolink mb-3'><FaMapMarker />
                                <p>Laton, UT 84041, USA</p>
                            </li>
                            <li className='cmb-fa-nolink my-3'><FaPhone />
                                <p>+ 01 801 663 6707</p>
                            </li>
                            <li className='cmb-fa-nolink my-3'><FaEnvelope />
                                <p>cdcharlesworth@gmail.com</p>
                            </li>
                        </ul>
                    </Col>

                </Row>
            </section>
        </Container>
    );
}