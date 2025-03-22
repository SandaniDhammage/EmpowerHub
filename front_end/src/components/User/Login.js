import React, { useState } from 'react';
import { Form, Input, Button, Card, Row, Layout, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/loginBack.jpg'; // Import the image

const { Footer } = Layout;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    
    const sendLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        let role = '';
        if (email === 'admin@test.com' && password === 'admin1234') {
            role = 'admin';
        } else {
            role = 'user';
        }

        const userCredentials = { email, password, role };

        // Handle login logic...
    };

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <div
                className="login"
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: `url(${backgroundImage}) no-repeat center center fixed`, // Using the imported image
                    backgroundSize: 'contain',
                    backgroundSize: 'cover',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        filter: 'blur(8px)',
                        zIndex: -1,
                    }}
                />
                <Card
                    style={{
                        width: '100%',
                        maxWidth: '500px',
                        borderRadius: 15,
                        padding: '40px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        backdropFilter: 'blur(10px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    }}
                >
                    <Form
                        name="login-form"
                        style={{ marginTop: '20px' }}
                    >
                        <h1 style={{
                            textAlign: 'center',
                            color: '#0C0950',
                            fontFamily: 'Arial, sans-serif',
                            marginBottom: '20px',
                            fontSize: '36px',
                        }}>
                            EmpowerHub
                        </h1>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={24}>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, type: 'email', message: 'Please enter a valid email!' }]} >
                                    <Input
                                        onChange={(val) => setEmail(val.target.value)}
                                        style={{
                                            borderRadius: 5,
                                            padding: '10px',
                                           
                                            borderColor: '#1A2A4B',
                                            color: '#fff',
                                            width: '100%',
                                            backgroundColor: 'transparent',
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={24}>
                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please enter your password!' }]}>
                                    <Input.Password
                                        onChange={(val) => setPassword(val.target.value)}
                                        style={{
                                            borderRadius: 5,
                                            padding: '10px',
                                            borderColor: '#1A2A4B',
                                           
                                            backgroundColor: 'transparent',
                                            width: '100%',
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={24}>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        onClick={sendLogin}
                                        style={{
                                            backgroundColor: '#1D3C6A',
                                            borderColor: '#1A2A4B',
                                            color: '#fff',
                                            fontSize: '16px',
                                            fontWeight: '600',
                                            borderRadius: 5,
                                            width: '100%',
                                            height: '40px',
                                            marginTop: '20px',
                                        }}
                                        loading={loading}
                                    >
                                        Log In
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={24}>
                                <Form.Item style={{ textAlign: 'center' }}>
                                    <Link to="/Register">
                                        <Button
                                            type="ghost"
                                            style={{
                                                color: '#fff',
                                                fontSize: '14px',
                                                fontWeight: '500',
                                            }}
                                        >
                                            Don't have an account? <span style={{ color: '#1D3C6A', fontWeight: 'bold', fontSize: '16px' }}>Sign up</span>
                                        </Button>
                                    </Link>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Card>
            </div>

            <Footer
                style={{
                    textAlign: 'center',
                    backgroundColor: '#23395B',
                    color: '#fff',
                    fontFamily: 'Arial, sans-serif',
                    padding: '20px',
                }}
            >
                EmpowerHub ©2025 Created by Team 23
            </Footer>
        </Layout>
    );
};

export default Login;

