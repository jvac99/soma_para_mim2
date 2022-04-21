import React from 'react';
import './Calculadora.css';
import Header from '../../containers/Header/Header';
import Button from '../../components/Button/Button';
import InputNumber from '../../components/InputNumber/InputNumber';

const titulo = process.env.REACT_APP_TITULO

const Calculadora = (props) => {

    const { value1, value2, result } = props;

    const onChange1 = (event) => {
        this.setState({ value1: event.target.value });
    }

    const onChange2 = (event) => {
        this.setState({ value2: event.target.value });
    }

    const handleSubmit = (event) => {
        this.setState({ result: parseInt(value1) + parseInt(value2) });
        event.preventDefault();
    }

    return (
        <div className="flex-box container-box">
            <div className="content-box">
                <Header titulo={titulo} />
                <form onSubmit={handleSubmit}>
                    <div className="valor">
                        <label>
                            {result}
                        </label>
                    </div>
                    <InputNumber onChange={onChange1} texto={"Número"} />
                    <InputNumber onChange={onChange2} texto={"Número"} />
                    <Button valor={"+"} tipo={"submit"} />
                </form>
            </div>
        </div>
    );
}

export default Calculadora;