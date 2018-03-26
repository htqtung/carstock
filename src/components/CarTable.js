import React, { Component } from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

class CarTable extends Component {
    render() {
        return (
            <div>
                <ReactTable 
                    columns={[
                        {
                            Header: "Brand",
                            accessor: "brand"
                        },
                        {
                            Header: "Model",
                            accessor: "model"
                        },
                        {
                            Header: "Fuel",
                            accessor: "fuel"
                        },
                        {
                            Header: "Year",
                            accessor: "year"
                        },
                        {
                            Header: "Color",
                            accessor: "color"
                        },
                        {
                            Header: "Price",
                            accessor: "price"
                        },
                        {
                            Header: "",
                            accessor: "_links.self.href",
                            flterable: false,
                            Cell: ({value}) => (
                                <button className="btn btn-sm btn-link"
                                    onClick={() => {this.props.deleteCar(value)}}
                                >
                                    Delete
                                </button>
                            )
                        }
                    ]} 
                    data={this.props.cars}
                    className="-striped"
                />    
            </div>
        );
    }
}

export default CarTable;