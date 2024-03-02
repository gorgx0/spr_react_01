import * as React from 'react';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";

interface Props {
    name:
        string
}

class App extends React.Component<Props> {
    render() {
        const {name} = this.props;
        return (
            <>
                <Header brand={name}/>
                <div className="container">
                    <div className="row">
                        <div className="col">col1</div>
                        <div className="col">col2</div>
                        <div className="col">col3</div>
                        <div className="col">col4</div>
                    </div>
                </div>
            </>
        )
    }
}

export default App;
