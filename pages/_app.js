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
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no"
                    />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
                </Head>
                <Component {...pageProps} />
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
                        min-height: 100vh;
                    }
                `}</style>
            </Container>
        );
    }
}
