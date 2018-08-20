import React, { Component } from 'react';
import './ImageSharp.css';

export class ImageSharp extends Component {
    displayName = ImageSharp.name

    render() {
        return (
            <React.Fragment>
                <h1>ImageSharp URI API Samples</h1>
                <main>
                    <section>
                        <h2>Resize</h2>
                        <div>
                            <p>
                                <code>imagesharp-logo.png?width=300&height=200</code>
                            </p>
                            <p>
                                <img src="imagesharp-logo.png?width=300&height=200"/>
                            </p>
                        </div>
                    </section>
                </main>
            </React.Fragment>
        );
    }
}