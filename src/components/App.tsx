import * as React from "react";

export interface AppProps { compiler: string; framework: string; }

/**
 * App is the main class of the app will "call" others components
 */
export default class App extends React.Component<AppProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}