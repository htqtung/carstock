import React, { Component } from 'react';
import CarTable from './CarTable';
import { ToastContainer, toast } from 'react-toastify';

class Carlist extends Component {
    constructor(props) {
        super(props);
        this.state = { cars: [] };
    }
    
    componentDidMount() {
        this.loadCars();
    }

    loadCars = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
            .then(res => res.json())
            .then(resData => {
                this.setState({ cars: resData._embedded.cars })
            });
    }
    
    deleteCar = (value) => {
        fetch(value, {method: 'DELETE'})
        .then(res => this.loadCars());
        toast.success("Car deleted successfully!", {
            position: toast.POSITION.TOP_RIGHT
        });
    }
    
    render() {
        return (
            <div>
                <h2>My cars</h2>
                <CarTable cars={this.state.cars} deleteCar={this.deleteCar}/>
                <ToastContainer autoClose={1500} />
            </div>
        );
    }
}

export default Carlist;