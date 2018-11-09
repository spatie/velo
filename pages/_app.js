import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Head>
                    <title>Velo</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                </Head>
                <div className="app">
                    <Component {...pageProps} />
                </div>
                <style jsx global>{`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }

                    body {
                        color: white;
                        background-color: black;
                        font-family: system-ui;
                        line-height: 1;
                        text-align: center;
                    }

                    .app {
                        width: 100vw;
                        height: 100vh;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        padding-bottom: 10vh;
                    }
                `}</style>
            </Container>
        );
    }
}
