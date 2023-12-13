import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function Form() {

    const [size, setSize] = useState("");
    const [distance, setDistance] = useState("");
    const [desibel, setDesibel] = useState("");
    const [airflow, setAirflow] = useState("");
    const [frequency, setFrequency] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "size":
                setSize(value);
                break;
            case "distance":
                setDistance(value);
                break;
            case "desibel":
                setDesibel(value);
                break;
            case "airflow":
                setAirflow(value);
                break;
            case "frequency":
                setFrequency(value);
                break;    
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await
            
                axios.post("https://flaskclassificacao.azurewebsites.net/api",
                    {

                        size: parseFloat(size),
                        distance: parseFloat(distance),
                        desibel: parseFloat(desibel),
                        airflow: parseFloat(airflow),
                        frequency:parseFloat(frequency)
                    });
            setResult(response.data);
        } catch (error) {
            console.error("Erro ao enviar a solicitação:",

                error);
        }
    };



    return (
        <div className="container mt-5">
            <h1 className="mb-4">Sistema de Predição Extinção de Incêndio</h1>

            <form onSubmit={handleSubmit} className="p-4">
                <div className="mb-3">
                    <label htmlFor="size" className="form-label">Tamanho

                        (size):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="size"
                        name="size"
                        value={size}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="distance" className="form-label">Distancia

                        (distance):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="distance"
                        name="distance"
                        value={distance}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desibel" className="form-label">Desibel
                       
                       (desibel):</label>
                    
                    <input

                        type="number"
                        className="form-control"
                        id="desibel"
                        name="desibel"
                        value={desibel}
                        required
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="airflow" className="form-label">Airflow

                        (airflow):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="airflow"
                        name="airflow"
                        value={airflow}
                        required
                        onChange={handleChange}
                        
                    />
                </div>

                
                <div className="mb-3">
                    <label htmlFor="frequency" className="form-label">Frequencia

                        (frequency):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="frequency"
                        name="frequency"
                        value={frequency}
                        required
                        onChange={handleChange}
                        
                    />
                </div>

                <button type="submit" id="btn" className="btn btn-
primary">Enviar</button>

            </form>
            {result && (
                <div className="card-body">
                    <h2>Resultado da Predição</h2>
                    <p className="alert alert-primary">{result}</p>
                </div>
            )}

        </div>
    )
}
export default Form
